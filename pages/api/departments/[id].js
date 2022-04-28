import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function departmentId(req, res) {
  try {
    const foundedDepartment = await prisma.department.findFirst({
      where: { id: +req.query.id, deleted: false },
    });
    if (!foundedDepartment)
      return res.status(400).send({ message: "Department not found!" });
    if (req.method === "PUT") {
      const updatedDepartment = await prisma.department.update({
        where: {
          id: +req.query.id,
        },
        data: { name: req.body.name },
      });
      return res.status(200).send(updatedDepartment);
    }
    if (req.method === "DELETE") {
      const departmentInUsed = await prisma.user.findMany({
        where: {
          departmentId: foundedDepartment.id,
          deleted: false,
        },
      });
      if (departmentInUsed.length >= 1)
        return res.send({ message: "Department in used" });
      const deletedDepartment = await prisma.department.update({
        where: {
          id: +req.query.id,
        },
        data: { deleted: true },
      });
      res.status(200).json(deletedDepartment);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
