import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
import nextConnect from "next-connect";
import uploadSingle from "../middleware/middleware";
const prisma = new PrismaClient();
const newHandle = nextConnect();
newHandle.use(uploadSingle());
newHandle.post(async (req, res) => {
  try {
    delete req.body.document;
    const {
      title,
      content,
      description,
      userId,
      categoryId,
      submissionId,
      anonymous,
    } = req.body;
    const newIdea = await prisma.idea.create({
      data: {
        title,
        content,
        description,
        lastModifiedDate: new Date(format(Date.now(), "yyyy-MM-dd")),
        userId: +userId,
        categoryId: +categoryId,
        submissionId: +submissionId,
        anonymous: anonymous === "true" ? true : false,
      },
    });
    let newRes = {};
    if (req.file) {
      const newFile = await prisma.file.create({
        data: {
          filePath: req.file.path,
          lastModifiedDate: new Date(format(Date.now(), "yyyy-MM-dd")),
          ideaId: newIdea.id,
        },
      });
      newRes = { ...newIdea, document: newFile };
    }
    res.status(200).send(newRes);
  } catch (error) {
    res.status(500).send(error);
  }
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default newHandle;
