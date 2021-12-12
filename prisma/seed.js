const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const admins = [
  {
    email: "admin@admin.com",
    password: "admin"
  }
];

async function main() {
  for (const a of admins) {
    await prisma.admin.create({
      data: a
    });
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
})