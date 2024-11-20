import express from "express";
import { v2 as cloudinary } from "cloudinary";

import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router();

type MessageType = {
  message: string;
  imageUrl: string;
};

type ErrorType = {
  error: string;
};

type Response = MessageType | ErrorType;

router.post<{}, Response>("/", upload.single("image"), async (req, res) => {
  try {
    // let user = req.get("User"); // Here must check if user is valid, but it's not necessary for now
    // @ts-ignore
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const mime = file.mimetype;
    const encoding = "base64";
    const base64Data = Buffer.from(file.buffer).toString(encoding);
    const fileUri = "data:" + mime + ";" + encoding + "," + base64Data;

    const result = await cloudinary.uploader.upload(fileUri, {
      invalidate: true,
      width: 400,
      height: 400,
      crop: "fill",
    });

    res.json({
      message: "Успешно добавихте снимка",
      imageUrl: result.secure_url,
    });
  } catch (e) {
    console.log("test+++ error", e);
  }
});

export default router;
