import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function roleId(req, res) {
  try {
    const foundedRole = await prisma.role.findFirst({
      where: { id: +req.query.id, deleted: false },
    });
    console.log(foundedRole);
    if (!foundedRole)
      return res.status(400).send({ message: "Role not found!" });
    if (req.method === "PUT") {
      const updatedRole = await prisma.role.update({
        where: {
          id: +req.query.id,
        },
        data: { name: req.body.name },
      });
      return res.status(200).send(updatedRole);
    }
    if (req.method === "DELETE") {
      const rolesInUsed = await prisma.user.findMany({
        where: {
          deleted: false,
        },
        include: {
          roles: { where: { name: foundedRole.name } },
        },
      });
      console.log(rolesInUsed);
      if (rolesInUsed.some((e) => e.roles.length >= 1))
        return res.send({ message: "Role in used" });
      const deletedRole = await prisma.role.update({
        where: {
          id: +req.query.id,
        },
        data: { deleted: true },
      });
      res.status(200).json(deletedRole);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
