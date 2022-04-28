import nextConnect from "next-connect";
import uploadSingle from "../../middleware/middleware";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const handle = nextConnect();
handle.use(uploadSingle());
handle.post(async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.body.email);
    console.log("/avatar/" + req.file.filename);
    const foundedUser = await prisma.user.findFirst({
      where: {
        email: req.body.email,
        deleted: false,
      },
    });
    if (!foundedUser)
      return res.status(400).send({ message: "User not found" });
    const updatedUser = await prisma.user.update({
      where: {
        id: foundedUser.id,
      },
      data: { avatar: "/avatar/" + req.file.filename },
    });
    res.status(200).send(updatedUser);
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
