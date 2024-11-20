import express from "express";

import finance from "./finance";
import category from "./category";
import account from "./account";
import uploadImage from "./uploadImage";

const router = express.Router();

router.use("/finance", finance);
router.use("/account", account);
router.use("/category", category);
router.use("/uploadImages", uploadImage);

export default router;
