import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function submissionList(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const foundedSubmission = await prisma.submission.findFirst({
          where: {
            id: +req.query.id,
            deleted: false,
          },
        });
        if (!foundedSubmission)
          return res.status(400).send({ message: "Submission not found!" });
        return res.status(200).send(foundedSubmission);
      }
      const foundedSubmissions = await prisma.submission.findMany({
        where: { deleted: false },
      });
      if (foundedSubmissions.length < 1)
        return res.status(200).send({ message: "Submissions not found" });
      res.status(200).send(foundedSubmissions);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
