import { PrismaClient } from "@prisma/client";
import nextConnect from "next-connect";
import uploadSingle from "../middleware/middleware";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
const handle = nextConnect();
handle.use(uploadSingle());
handle.post(async (req, res) => {
  try {
    delete req.body.avatar;
    const foundedUser = await prisma.user.findFirst({
      where: {
        email: req.body.email,
        deleted: false,
      },
    });
    if (foundedUser)
      return res.status(400).send({ message: "Email already registerd!" });
    const foundedRole = await prisma.role.findFirst({
      where: {
        name: "Staff",
        deleted: false,
      },
    });
    if (!foundedRole)
      return res.status(400).send({ message: "Role not found" });
    const hashPassword = await bcrypt.hash(req.body.password, 8);
    const newUser = await prisma.user.create({
      data: {
        ...req.body,
        password: hashPassword,
        roles: {
          connect: [{ id: foundedRole.id }],
        },
        departmentId: +req.body.departmentId,
        avatar: "/avatar/" + req.file.filename,
      },
    });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default handle;
