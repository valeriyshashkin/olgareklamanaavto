const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
