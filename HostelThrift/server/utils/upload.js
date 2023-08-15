//npm i multer-gridfs-storage need to install this, as multer works as middleware which helps to upload the image on mongodb
//GridFS storage engine for Multer to uploaded files directly to mongoDb
//npm i multer - to upload image
import multer from 'multer';
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from 'dotenv';
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const storage = new GridFsStorage({
  url: `mongodb://${username}:${password}@ac-adooyjx-shard-00-00.zv6o164.mongodb.net:27017,ac-adooyjx-shard-00-01.zv6o164.mongodb.net:27017,ac-adooyjx-shard-00-02.zv6o164.mongodb.net:27017/?ssl=true&replicaSet=atlas-x90xll-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },

  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1)
      //if image exists in array it will return index of array if not it will return -1
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
