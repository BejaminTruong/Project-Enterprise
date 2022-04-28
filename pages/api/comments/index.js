import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function commentList(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const foundedComment = await prisma.comment.findFirst({
          where: {
            id: +req.query.id,
            deleted: false,
          },
        });
        if (!foundedComment)
          return res.status(400).send({ message: "Comment not found!" });
        return res.status(200).send(foundedComment);
      }
      const foundedComments = await prisma.comment.findMany({
        where: { deleted: false },
      });
      if (foundedComments.length < 1)
        return res.status(200).send({ message: "No comment" });
      res.status(200).send(foundedComments);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
