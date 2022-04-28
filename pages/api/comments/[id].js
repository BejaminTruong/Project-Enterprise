import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function commentId(req, res) {
  try {
    const foundedComment = await prisma.comment.findFirst({
      where: { id: +req.query.id, deleted: false },
    });
    if (!foundedComment)
      return res.status(400).send({ message: "Comment not found!" });
    if (req.method === "PUT") {
      if (req.body.commentId) {
        const repliedComment = await prisma.comment.findFirst({
          where: { id: req.body.commentId, deleted: false },
        });
        if (!repliedComment)
          return res
            .status(400)
            .send({ message: "Comment not found to reply" });
      }
      const updatedComment = await prisma.comment.update({
        where: {
          id: +req.query.id,
        },
        data: {
          content: req.body.content,
        },
      });
      return res.status(200).send(updatedComment);
    }
    if (req.method === "DELETE") {
      const deletedComment = await prisma.comment.update({
        where: {
          id: +req.query.id,
        },
        data: { deleted: true },
      });
      res.status(200).json(deletedComment);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
