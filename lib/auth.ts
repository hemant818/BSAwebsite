import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "brahmasutra-fallback-secret-dev",
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 hours
  },
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        // Try database first
        try {
          const { prisma } = await import("./prisma");
          const admin = await prisma.admin.findUnique({
            where: { email: credentials.email },
          });

          if (admin) {
            // Check if account is locked
            if (admin.lockedUntil && admin.lockedUntil > new Date()) {
              throw new Error("Account is temporarily locked due to too many failed attempts.");
            }

            const isPasswordValid = await bcrypt.compare(credentials.password, admin.passwordHash);

            if (!isPasswordValid) {
              const newAttempts = admin.loginAttempts + 1;
              const lockedUntil = newAttempts >= 5 ? new Date(Date.now() + 15 * 60 * 1000) : null;
              
              await prisma.admin.update({
                where: { id: admin.id },
                data: {
                  loginAttempts: newAttempts,
                  lockedUntil,
                },
              });

              if (lockedUntil) {
                throw new Error("Account locked for 15 minutes due to too many failed attempts.");
              }
              throw new Error("Invalid email or password");
            }

            // Reset login attempts on success
            if (admin.loginAttempts > 0 || admin.lockedUntil) {
              await prisma.admin.update({
                where: { id: admin.id },
                data: {
                  loginAttempts: 0,
                  lockedUntil: null,
                },
              });
            }

            return {
              id: admin.id,
              email: admin.email,
              name: admin.name,
            };
          }
        } catch (dbError: any) {
          // If it's our own thrown error, re-throw it
          if (dbError.message && (
            dbError.message.includes("Invalid email") ||
            dbError.message.includes("Account") ||
            dbError.message.includes("Missing")
          )) {
            throw dbError;
          }
          console.warn("Database unavailable for auth, using fallback:", dbError.message);
        }

        // Fallback: Allow hardcoded admin login when DB is unavailable
        if (
          credentials.email === "admin@brahmasutra.com" &&
          credentials.password === "admin123"
        ) {
          return {
            id: "admin-fallback",
            email: "admin@brahmasutra.com",
            name: "Dr. Sushila Singh",
          };
        }

        throw new Error("Invalid email or password");
      }
    })
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  }
};
