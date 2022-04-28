import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getTotalIdea = async (id) => {
  const allUsersOfDepartment = await prisma.user.findMany({
    where: {
      departmentId: id,
      deleted: false,
    },
  });
  if (allUsersOfDepartment.length < 1)
    return 0;
  let totalUser = 0;
  for (let i = 0; i < allUsersOfDepartment.length; i++) {
    const element = allUsersOfDepartment[i];
    const allIdeasOfUser = await prisma.idea.count({
      where: { userId: element.id, deleted: false },
    });
    totalUser += allIdeasOfUser;
  }
  return totalUser;
};

export default async function departmentList(req, res) {
  try {
    if (req.method === "GET") {
      let totalIdea = 0;
      if (req.query.id) {
        const foundedDepartment = await prisma.department.findFirst({
          where: {
            id: +req.query.id,
            deleted: false,
          },
        });
        if (!foundedDepartment)
          return res.status(400).send({ message: "Department not found!" });
        return res.status(200).send(foundedDepartment);
      }
      const foundedDepartments = await prisma.department.findMany({
        where: { deleted: false },
      });
      if (foundedDepartments.length < 1)
        return res.status(200).send({ message: "Departments not found" });
      for (let i = 0; i < foundedDepartments.length; i++) {
        const element = foundedDepartments[i];
        totalIdea = await getTotalIdea(element.id);
        element.totalIdea = totalIdea
      }
      res.status(200).send(foundedDepartments);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
