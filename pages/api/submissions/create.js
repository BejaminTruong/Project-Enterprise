import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
const prisma = new PrismaClient();
export default async function create(req, res) {
  try {
    const { name, description, closureDate, finalClosureDate } = req.body;
    if (req.method === "POST") {
      const foundedSubmission = await prisma.submission.findFirst({
        where: {
          name,
          deleted: false,
        },
      });
      if (foundedSubmission)
        return res.status(400).send({ message: "Submission already existed" });
      const newSubmission = await prisma.submission.create({
        data: {
          name,
          description,
          closureDate: new Date(closureDate),
          finalClosureDate: new Date(finalClosureDate),
        },
      });
      res.status(200).send(newSubmission);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
