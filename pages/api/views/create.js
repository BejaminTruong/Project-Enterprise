import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
const prisma = new PrismaClient();
export default async function create(req, res) {
  try {
    const { userId, ideaId } = req.body;
    if (req.method === "POST") {
      const viewedIdea = await prisma.view.findFirst({
        where: {
          userId,
          ideaId,
          deleted: false,
        },
      });
      if (viewedIdea) {
        await prisma.view.update({
          where: { id: viewedIdea.id },
          data: { userId },
        });
        return res.status(200).send({ message: "View updated" });
      }
      const newView = await prisma.view.create({
        data: {
          lastVisitedDate: new Date(format(Date.now(), "yyyy-MM-dd")),
          userId,
          ideaId,
        },
      });
      res.status(200).send(newView);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
