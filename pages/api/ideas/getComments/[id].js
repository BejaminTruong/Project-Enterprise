import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function commentsOfIdea(req, res) {
  try {
    if (req.method === "GET") {
      const foundedcommentsOfIdea = await prisma.comment.findMany({
        where: {
          ideaId: +req.query.id,
          deleted: false,
        },
        include: {
          user: {
            select: {
              fullName: true,
              avatar: true,
            },
          },
        },
      });
      if (foundedcommentsOfIdea.length === 0)
        return res.status(200).send({ message: "No comment!" });
      return res.status(200).send(foundedcommentsOfIdea);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
