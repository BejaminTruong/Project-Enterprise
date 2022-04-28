import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function create(req, res) {
  try {
      const {name, description} = req.body;
    if (req.method === "POST") {
      const foundedCategory = await prisma.category.findFirst({
        where: {
          name,
          deleted: false,
        },
      });
      if (foundedCategory)
        return res.status(400).send({ message: "Category already existed" });
      const newCategory = await prisma.category.create({
        data: { name, description },
      });
      res.status(200).send(newCategory);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
