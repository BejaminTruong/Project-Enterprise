import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
const prisma = new PrismaClient();
export default async function create(req, res) {
  try {
    const { filePath, ideaId } = req.body;
    if (req.method === "POST") {
      const foundedFile = await prisma.file.findFirst({
        where: {
          filePath,
          deleted: false,
        },
      });
      if (foundedFile)
        return res.status(400).send({ message: "File already existed" });
      const newFile = await prisma.file.create({
        data: {
          filePath,
          lastModifiedDate: new Date(format(Date.now(), "yyyy-MM-dd")),
          ideaId,
        },
      });
      res.status(200).send(newFile);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
