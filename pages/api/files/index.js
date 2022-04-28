import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function fileList(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const foundedFile = await prisma.file.findFirst({
          where: {
            id: +req.query.id,
            deleted: false,
          },
        });
        if (!foundedFile)
          return res.status(400).send({ message: "File not found!" });
        return res.status(200).send(foundedFile);
      }
      const foundedFiles = await prisma.file.findMany({
        where: { deleted: false },
      });
      if (foundedFiles.length < 1)
        return res.status(400).send({ message: "File not found" });
      res.status(200).send(foundedFiles);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
