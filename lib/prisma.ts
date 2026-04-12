import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL!;

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | null;
  prismaFailed: boolean;
};

function createPrismaClient(): PrismaClient | null {
  try {
    const client = new PrismaClient({
      adapter: new PrismaPg(connectionString),
    });
    return client;
  } catch (e) {
    console.warn("[Prisma] Failed to initialize client:", (e as Error).message);
    return null;
  }
}

if (!globalForPrisma.prisma && !globalForPrisma.prismaFailed) {
  try {
    globalForPrisma.prisma = createPrismaClient();
    globalForPrisma.prismaFailed = globalForPrisma.prisma === null;
  } catch {
    globalForPrisma.prisma = null;
    globalForPrisma.prismaFailed = true;
  }
}

// Export a safe proxy — all operations return empty/default values if DB is unavailable
export const prisma = globalForPrisma.prisma ?? createNoOpPrisma();

function createNoOpPrisma(): any {
  const noOp = new Proxy({} as any, {
    get(_, prop) {
      // For any model accessor (appointment, admin, etc.)
      return new Proxy({} as any, {
        get(_, method) {
          return async (..._args: any[]) => {
            console.warn(`[Prisma NoOp] ${String(prop)}.${String(method)} called but DB is offline`);
            // Return sensible defaults per method
            if (method === "findMany") return [];
            if (method === "findFirst" || method === "findUnique") return null;
            if (method === "count") return 0;
            if (method === "create") return {};
            if (method === "update") return {};
            if (method === "delete") return {};
            return null;
          };
        },
      });
    },
  });
  return noOp;
}
