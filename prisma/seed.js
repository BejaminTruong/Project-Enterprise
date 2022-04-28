const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
let userArr = [
  {
    fullName: "Trương Thái Bình",
    staffId: "GCS190121",
    email: "binh1@gmail.com",
    password: "123",
    roles: {
      connect: [{ id: 1 }, { id: 2 }],
    },
    departmentId: 1,
  },
  {
    fullName: "Nguyễn Thái Tuấn",
    staffId: "GCS180234",
    email: "tuan1@gmail.com",
    password: "123",
    roles: {
      connect: [{ id: 2 }],
    },
    departmentId: 2,
  },
  {
    fullName: "Nguyễn Mạnh Tài",
    staffId: "GCS170294",
    email: "tai1@gmail.com",
    password: "123",
    roles: {
      connect: [{ id: 2 }],
    },
    departmentId: 1,
  },
];
async function main() {
  await prisma.department.deleteMany({});
  await prisma.department.createMany({
    data: [{ name: "IT" }, { name: "HR" }, { name: "QA" }],
  });
  await prisma.role.deleteMany({});

  await prisma.role.createMany({
    data: [{ name: "Admin" }, { name: "User" }],
  });
  await prisma.user.deleteMany({});

  for (let i = 0; i < userArr.length; i++) {
    const u = userArr[i];
    await prisma.user.create({
      data: {
        fullName: u.fullName,
        staffId: u.staffId,
        email: u.email,
        password: await bcrypt.hash(u.password, 8),
        roles: u.roles,
        departmentId: u.departmentId,
      },
    });
  }

  await prisma.category.deleteMany({});
  await prisma.category.createMany({
    data: [
      { name: "Cat1", description: "Des1" },
      { name: "Cat2", description: "Des2" },
      { name: "Cat3", description: "Des3" },
    ],
  });

  await prisma.submission.deleteMany({});
  await prisma.submission.createMany({
    data: [
      {
        name: "Sub1",
        description: "Des1",
        closureDate: new Date("2022-03-01"),
        finalClosureDate: new Date("2022-03-18"),
      },
      {
        name: "Sub2",
        description: "Des2",
        closureDate: new Date("2022-03-01"),
        finalClosureDate: new Date("2022-03-18"),
      },
      {
        name: "Sub3",
        description: "Des3",
        closureDate: new Date("2022-03-01"),
        finalClosureDate: new Date("2022-03-18"),
      },
    ],
  });

  await prisma.idea.deleteMany({});
  await prisma.idea.createMany({
    data: [
      {
        title: "Sub1",
        content: "blablabla1",
        description: "Des1",
        categoryId: 1,
        submissionId: 1,
        userId: 1,
      },
      {
        title: "Sub2",
        content: "blablabla2",
        description: "Des2",
        categoryId: 2,
        submissionId: 2,
        userId: 2,
      },
      {
        title: "Sub3",
        content: "blablabla3",
        description: "Des3",
        categoryId: 3,
        submissionId: 3,
        userId: 3,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
