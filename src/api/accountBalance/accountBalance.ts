import express from "express";
import AccountBalance from "../../db/models/AccountBalance";

const router = express.Router();

type AccountBalanceResponse = {
  message: string;
};

type AccountResponse = any;

router.get<{}, AccountResponse>("/getAll/:userId", async (req, res) => {
  //@ts-ignore
  const { userId } = req.params;
  // Rest of the code
  const data = await AccountBalance.find({
    userId,
  });

  res.json(data);
});

router.post<{}, AccountBalanceResponse>("/create", async (req, res) => {
  try {
    const { user, value, imageUrl } = req.body;

    await AccountBalance.create({
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

export { router };
