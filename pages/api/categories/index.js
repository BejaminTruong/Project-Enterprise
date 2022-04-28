import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function categoryList(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const foundedCategory = await prisma.category.findFirst({
          where: {
            id: +req.query.id,
            deleted: false,
          },
        });
        if (!foundedCategory)
          return res.status(400).send({ message: "Category not found!" });
        return res.status(200).send(foundedCategory);
      }
      const foundedCategories = await prisma.category.findMany({
        where: { deleted: false },
      });
      if (foundedCategories.length < 1)
        return res.status(200).send({ message: "Categories not found" });
      res.status(200).send(foundedCategories);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
