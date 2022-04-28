import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function FileId(req, res) {
  try {
    const {
      filePath,
      ideaId,
    } = req.body;
    const foundedFile = await prisma.file.findFirst({
      where: { id: +req.query.id, deleted: false },
    });
    if (!foundedFile)
      return res.status(400).send({ message: "File not found!" });
    if (req.method === "PUT") {
      const updatedFile = await prisma.file.update({
        where: {
          id: +req.query.id,
        },
        data: {
          filePath,
          ideaId
        },
      });
      return res.status(200).send(updatedFile);
    }
    if (req.method === "DELETE") {
      const deletedFile = await prisma.file.update({
        where: {
          id: +req.query.id,
        },
        data: { deleted: true },
      });
      res.status(200).json(deletedFile);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
