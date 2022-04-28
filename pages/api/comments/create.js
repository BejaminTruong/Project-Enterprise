import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
const prisma = new PrismaClient();
export default async function create(req, res) {
  try {
    const { content, userId, ideaId, anonymous } = req.body;
    if (req.method === "POST") {
      if (req.body.commentId) {
        const foundedComment = await prisma.comment.findFirst({
          where: { id: req.body.commentId, deleted: false },
        });
        if (!foundedComment)
          return res
            .status(400)
            .send({ message: "Comment not found to reply" });
      }
      console.log(1)
      const newComment = await prisma.comment.create({
        data: {
          content,
          userId,
          ideaId,
          lastModifiedDate: new Date(format(Date.now(), "yyyy-MM-dd")),
          commentId: req.body.commentId ? req.body.commentId : null,
          anonymous,
        },
      });
      console.log(2)
      res.status(200).send(newComment);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
