import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function userList(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const foundedUser = await prisma.user.findFirst({
          where: {
            id: +req.query.id,
            deleted: false,
          },
          include: {
            roles: { select: { name: true } },
            departments: { select: { name: true } },
          },
        });
        if (!foundedUser)
          return res.status(400).send({ message: "User not found!" });
        return res.status(200).send(foundedUser);
      }
      const foundedUsers = await prisma.user.findMany({
        where: { deleted: false },
        include: {
          roles: { select: { name: true } },
          departments: { select: { name: true } },
        },
      });
      if (foundedUsers.length < 1)
        return res.status(200).send({ message: "Users not found" });
      res.status(200).send(foundedUsers);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
