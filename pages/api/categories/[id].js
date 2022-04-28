import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function categoryId(req, res) {
  try {
    const { name, description } = req.body;
    const foundedCategory = await prisma.category.findFirst({
      where: { id: +req.query.id, deleted: false },
    });
    if (!foundedCategory)
      return res.status(400).send({ message: "Category not found!" });
    if (req.method === "PUT") {
      const updatedCategory = await prisma.category.update({
        where: {
          id: +req.query.id,
        },
        data: { name, description },
      });
      return res.status(200).send(updatedCategory);
    }
    if (req.method === "DELETE") {
      //   const categoryInUsed = await prisma.idea.findMany({
      //     where: {
      //       categoryId: foundedCategory.id,
      //       deleted: false,
      //     },
      //   });
      //   if (categoryInUsed.length >= 1)
      //     return res.send({ message: "Category in used" });
      const deletedCategory = await prisma.category.update({
        where: {
          id: +req.query.id,
        },
        data: { deleted: true },
      });
      res.status(200).json(deletedCategory);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
