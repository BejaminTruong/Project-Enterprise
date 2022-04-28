import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function create(req, res) {
  try {
    if (req.method === "POST") {
      const foundedDepartment = await prisma.department.findFirst({
        where: {
          name: req.body.name,
          deleted: false,
        },
      });
      if (foundedDepartment)
        return res.status(400).send({ message: "Department already existed" });
      const newDepartment = await prisma.department.create({
        data: { name: req.body.name },
      });
      res.status(200).send(newDepartment);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
