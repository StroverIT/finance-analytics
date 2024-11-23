import express from "express";
import { v2 as cloudinary } from "cloudinary";

import multer from "multer";

require("dotenv").config();

const upload = multer({ storage: multer.memoryStorage() });

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

// Configuration
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
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
      crop: "fill",
    });

    res.json({
      message: "Успешно добавихте снимка",
      imageUrl: result.secure_url,
    });
  } catch (e) {
    console.log("test+++ error", e);
    console.log("keys: ", {
      CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET,
    });
  }
});

export default router;
