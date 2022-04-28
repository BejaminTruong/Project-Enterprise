import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function viewList(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const foundedView = await prisma.view.findFirst({
          where: {
            id: +req.query.id,
            deleted: false,
          },
        });
        if (!foundedView)
          return res.status(400).send({ message: "View not found!" });
        return res.status(200).send(foundedView);
      }
      const foundedViews = await prisma.view.findMany({
        where: { deleted: false },
      });
      if (foundedViews.length < 1)
        return res.status(400).send({ message: "View not found" });
      res.status(200).send(foundedViews);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
