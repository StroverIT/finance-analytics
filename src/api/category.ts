import express from "express";
import Category from "../db/models/Category";

const router = express.Router();

type CategoryResponse = {
  message: string;
};
type GetCategoryResponse = any;

interface CreateCategoryRequest {
  user: {
    uid: string;
  };
  value: string;
  imageUrl: string;
}

router.get<{}, GetCategoryResponse>("/getAll/:userId", async (req, res) => {
  //@ts-ignore
  const { userId } = req.params;
  // Rest of the code
  const data = await Category.find({
    userId,
  });
  console.log("test+++", data);

  res.json(data);
});

router.post<{}, CategoryResponse>("/create", async (req, res) => {
  try {
    const { user, value, imageUrl }: CreateCategoryRequest = req.body;

    await Category.create({
      name: value,
      userId: user.uid,
      icon: imageUrl,
    });

    res.json({
      message: "Vliza 2",
    });
  } catch (e) {
    console.log("test+++ error", e);
  }
});

export default router;
