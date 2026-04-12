require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient()

async function main() {
  const hash = await bcrypt.hash('admin123', 10);
  await prisma.admin.upsert({
    where: { email: 'admin@brahmasutra.com' },
    update: { passwordHash: hash },
    create: {
      email: 'admin@brahmasutra.com',
      passwordHash: hash,
      name: 'Dr. Sushila Singh',
    },
  });
  console.log('Admin credentials ready: admin@brahmasutra.com / admin123');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
