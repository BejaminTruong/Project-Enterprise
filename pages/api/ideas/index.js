import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function ideaList(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const foundedIdea = await prisma.idea.findFirst({
          where: {
            id: +req.query.id,
            deleted: false,
          },
          include: {
            user: { select: { fullName: true } },
            category: { select: { name: true } },
            submission: { select: { finalClosureDate: true } },
          },
        });
        if (!foundedIdea)
          return res.status(400).send({ message: "Idea not found!" });
        return res.status(200).send(foundedIdea);
      }
      const foundedIdeas = await prisma.idea.findMany({
        where: { deleted: false },
        include: {
          user: { select: { fullName: true } },
          category: { select: { name: true } },
          submission: { select: { finalClosureDate: true } },
        },
      });
      if (foundedIdeas.length < 1)
        return res.status(200).send({ message: "Ideas not found" });
      res.status(200).send(foundedIdeas);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
