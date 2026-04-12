// Pure No-Op Prisma client to avoid build dependency issues on Vercel
// Since the project is moving to WhatsApp-only booking, this safely simulates a DB
// and prevents build errors related to missing @prisma/client generation.

export const prisma = createNoOpPrisma();

function createNoOpPrisma(): any {
  const noOp = new Proxy({} as any, {
    get(_, prop) {
      if (prop === "$connect") return async () => {};
      if (prop === "$disconnect") return async () => {};
      
      // For any model accessor (appointment, admin, etc.)
      return new Proxy({} as any, {
        get(_, method) {
          return async (..._args: any[]) => {
            console.warn(`[Prisma NoOp] ${String(prop)}.${String(method)} called but DB is disabled`);
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
