import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function create(req, res) {
  try {
    let { reaction, userId, ideaId } = req.body;
    if (req.method === "POST") {
      if (req.query.id) {
        const userReaction = await prisma.reaction.findFirst({
          where: {
            id: +req.query.id,
            deleted: false,
          },
        });
        if (!userReaction) {
          return res.status(400).send({ message: "Reaction not found" });
        }
        if (
          userReaction.reaction !== null &&
          userReaction.reaction === reaction
        ) {
          reaction = null;
        }
        const updatedReaction = await prisma.reaction.update({
          where: { id: +req.query.id },
          data: {
            reaction,
          },
        });
        return res.status(200).send(updatedReaction);
      }
      const foundedReaction = await prisma.reaction.findFirst({
        where: {
          userId,
          ideaId,
          deleted: false,
        },
      });
      if (foundedReaction) {
        return res.status(200).send({message: "This user already reacted to this idea!"});
      }
      const newReaction = await prisma.reaction.create({
        data: {
          reaction,
          userId,
          ideaId,
        },
      });
      res.status(200).send(newReaction);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
