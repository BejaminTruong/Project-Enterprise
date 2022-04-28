import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function create(req, res) {
  try {
    if (req.method === "POST") {
      const foundedRole = await prisma.role.findFirst({
        where: {
          name: req.body.name,
          deleted: false,
        },
      });
      if (foundedRole)
        return res.status(400).send({ message: "Role already existed" });
      const newRole = await prisma.role.create({
        data: {name: req.body.name},
      });
      res.status(200).send(newRole);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
