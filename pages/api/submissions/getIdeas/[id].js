import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function ideasOfSubmission(req, res) {
  try {
    if (req.method === "GET") {
      const foundedIdeasOfSubmission = await prisma.idea.findMany({
        where: {
          submissionId: +req.query.id,
          deleted: false,
        },
        include: {
          category: {
            select: {
              name: true,
            },
          },
          submission: {
            select: {
              closureDate: true,
            },
          },
        },
      });
      if (foundedIdeasOfSubmission.length === 0)
        return res
          .status(200)
          .send({ message: "This submission has no idea!" });
      let totalLike = 0;
      let totalDislike = 0;
      let totalView = 0;
      for (let i = 0; i < foundedIdeasOfSubmission.length; i++) {
        const element = foundedIdeasOfSubmission[i];
        const allLike = await prisma.reaction.count({
          where: {
            reaction: true,
            ideaId: element.id,
            deleted: false,
          },
        });
        const allDislike = await prisma.reaction.count({
          where: {
            reaction: false,
            ideaId: element.id,
            deleted: false,
          },
        });
        const allView = await prisma.view.count({
          where:{
            ideaId: element.id,
            deleted: false
          }
        })
        totalLike += allLike;
        totalDislike += allDislike;
        totalView += allView
        element.totalLike = totalLike;
        element.totalDislike = totalDislike;
        element.totalView = totalView
        totalLike = 0;
        totalDislike = 0;
        totalView = 0;
      }
      return res.status(200).send(foundedIdeasOfSubmission);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
