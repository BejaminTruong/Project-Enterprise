import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
export default async function login(req, res) {
  try {
    if (req.method === "POST") {
      const { email, password } = req.body;
      const foundedUser = await prisma.user.findFirst({
        where: {
          email,
          deleted: false,
        },
        include: {
          roles: { select: { name: true } },
          departments: { select: { name: true } },
        },
      });
      if (!foundedUser)
        return res.status(400).send({ message: "User not found" });
      const confirmPassword = await bcrypt.compare(
        password,
        foundedUser.password
      );
      if (!confirmPassword)
        return res.status(400).send({ message: "Wrong password" });
      res.status(200).send(foundedUser);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
