import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function IdeaId(req, res) {
  try {
    const { title, content, description, categoryId, anonymous } = req.body;
    const foundedIdea = await prisma.idea.findFirst({
      where: { id: +req.query.id, deleted: false },
    });
    if (!foundedIdea)
      return res.status(400).send({ message: "Idea not found!" });
    if (req.method === "PUT") {
      const updatedIdea = await prisma.idea.update({
        where: {
          id: +req.query.id,
        },
        data: {
          title,
          content,
          description,
          categoryId,
          anonymous,
        },
      });
      return res.status(200).send(updatedIdea);
    }
    if (req.method === "DELETE") {
      const deletedIdea = await prisma.idea.update({
        where: {
          id: +req.query.id,
        },
        data: { deleted: true },
      });
      res.status(200).json(deletedIdea);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
