import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function userId(req, res) {
  try {
    const { staffId, password, departmentId, avatar, fullName } = req.body;
    const foundedUser = await prisma.user.findFirst({
      where: { id: +req.query.id, deleted: false },
      include: {
        roles: true,
      },
    });
    if (!foundedUser)
      return res.status(400).send({ message: "User not found!" });
    if (req.method === "PUT") {
      if (req.body.roles && req.body.roles.length >= 1) {
        await prisma.user.update({
          where: {
            id: foundedUser.id,
          },
          data: {
            roles: {
              set: [],
            },
          },
        });
        for (let i = 0; i < req.body.roles.length; i++) {
          const roleId = req.body.roles;
          await prisma.user.update({
            where: {
              id: foundedUser.id,
            },
            data: {
              roles: {
                connect: [{ id: roleId[i] }],
              },
            },
          });
        }
      }
      const updatedUser = await prisma.user.update({
        where: {
          id: foundedUser.id,
        },
        data: {
          staffId,
          password,
          departmentId,
          avatar,
          fullName,
        },
      });
      const newFoundedUser = await prisma.user.findFirst({
        where: { id: +req.query.id, deleted: false },
        include: {
          roles: true,
        },
      });
      console.log(newFoundedUser);
      return res.status(200).send(updatedUser);
    }
    if (req.method === "DELETE") {
      const deletedUser = await prisma.user.update({
        where: {
          id: +req.query.id,
        },
        data: { deleted: true },
      });
      res.status(200).json(deletedUser);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
