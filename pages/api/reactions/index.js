import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function reactionList(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const foundedReaction = await prisma.reaction.findFirst({
          where: {
            id: +req.query.id,
            deleted: false,
          },
        });
        if (!foundedReaction)
          return res.status(400).send({ message: "Reaction not found!" });
        return res.status(200).send(foundedReaction);
      }
      const foundedReactions = await prisma.reaction.findMany({
        where: { deleted: false },
      });
      if (foundedReactions.length < 1)
        return res.status(200).send({ message: "Reactions not found" });
      res.status(200).send(foundedReactions);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
