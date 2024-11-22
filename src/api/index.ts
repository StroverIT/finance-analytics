import express from "express";

import finance from "./finance";
import category from "./category";
import accountBalance from "./accountBalance";
import uploadImage from "./uploadImage";
import expenses from "./expenses";

const router = express.Router();

router.get<{}, any>("/", (req, res) => {
  res.json({
    message: "route is working",
  });
});

router.use("/finance", finance);
router.use("/accountBalance", accountBalance);
router.use("/category", category);
router.use("/uploadImages", uploadImage);
router.use("/expenses", expenses);

export default router;
