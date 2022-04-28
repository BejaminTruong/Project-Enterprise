import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function submissionId(req, res) {
  try {
    const { name, description, closureDate, finalClosureDate } = req.body;
    const foundedSubmission = await prisma.submission.findFirst({
      where: { id: +req.query.id, deleted: false },
    });
    if (!foundedSubmission)
      return res.status(400).send({ message: "Submission not found!" });
    if (req.method === "PUT") {
      const updatedSubmission = await prisma.submission.update({
        where: {
          id: +req.query.id,
        },
        data: {
          name,
          description,
          closureDate: new Date(closureDate),
          finalClosureDate: new Date(finalClosureDate),
        },
      });
      return res.status(200).send(updatedSubmission);
    }
    if (req.method === "DELETE") {
      const deletedSubmission = await prisma.submission.update({
        where: {
          id: +req.query.id,
        },
        data: { deleted: true },
      });
      res.status(200).json(deletedSubmission);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
