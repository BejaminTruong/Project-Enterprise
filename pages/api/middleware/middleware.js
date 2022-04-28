import multer from 'multer'
import nextConnect from 'next-connect'

const uploadSingle = () => {
  const upload = multer({
    storage: multer.diskStorage({
      destination: "./public/avatar",
      filename(req, file, done) {
        const name = Date.now() + "-" + file.originalname;
        done(null, name);
      },
    }),
  });
  return upload.single("avatar");
};

export default uploadSingle