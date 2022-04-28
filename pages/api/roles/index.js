import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function roleList(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const foundedRole = await prisma.role.findFirst({
          where: {
            id: +req.query.id,
            deleted: false,
          },
        });
        if (!foundedRole)
          return res.status(400).send({ message: "Role not found!" });
        return res.status(200).send(foundedRole);
      }
      const foundedRoles = await prisma.role.findMany({
        where: { deleted: false },
      });
      if (foundedRoles.length < 1)
        return res.status(200).send({ message: "Roles not found" });
      res.status(200).send(foundedRoles);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
