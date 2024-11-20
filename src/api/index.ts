import express from "express";

import finance from "./finance";
import category from "./category";
import accountBalance from "./accountBalance";
import uploadImage from "./uploadImage";

const router = express.Router();

router.use("/finance", finance);
router.use("/accountBalance", accountBalance);
router.use("/category", category);
router.use("/uploadImages", uploadImage);

export default router;
