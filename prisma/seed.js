const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const admins = [
  {
    email: "admin@admin.com",
    password: "admin",
  },
];

const content = [
  {
    key: "instagram",
    value: "",
  },
  {
    key: "whatsapp",
    value: "",
  },
  {
    key: "email",
    value: "",
  },
  {
    key: "simplePrice",
    value: "",
  },
  {
    key: "universalPrice",
    value: "",
  },
  {
    key: "busPrice",
    value: "",
  },
];

async function main() {
  for (const c of content) {
    const isExists = await prisma.content.findFirst({
      where: { key: c.key },
    });
    if (!isExists) {
      await prisma.content.create({
        data: c,
      });
    }
  }

  for (const a of admins) {
    const isExists = await prisma.admin.findFirst({
      where: { email: a.email },
    });
    if (!isExists) {
      await prisma.admin.create({
        data: a,
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
