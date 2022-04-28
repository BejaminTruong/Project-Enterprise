import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function reactionOfIdea(req, res) {
  try {
    if (req.method === "GET") {
      const { slug } = req.query;
      const foundedReactionOfIdea = await prisma.reaction.findFirst({
        where: {
          userId: +slug[0],
          ideaId: +slug[1],
          deleted: false,
        },
      });
      if (!foundedReactionOfIdea)
        return res.status(200).send({ message: "Reaction not found" });
      return res.status(200).send(foundedReactionOfIdea);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
