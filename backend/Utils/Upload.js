import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

const Username = process.env.user_name;
const password = process.env.Password;

const storagee = new GridFsStorage ({
  url: `mongodb+srv://${Username}:${password}@blog-clusster.rqysovs.mongodb.net/`,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (request, file) => {
    console.log("File from multer:", file);

    const match = ["image/png", "image/jpg", "image/jpeg"];
    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`, // Ensure the filename format is correct
    };
  },
});

export default multer({ storagee });
