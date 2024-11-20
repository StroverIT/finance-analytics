import express from "express";
import { getFirebaseAuth } from "../libs/firebaseConfig";

const router = express.Router();

type EmojiResponse = {
  messsage: string;
};

router.get<{}, EmojiResponse>("/", (req, res) => {
  try {
    let user = req.get("User");
    if (user) user = JSON.parse(user);
    console.log("test+++", user);
    getFirebaseAuth();

    res.json({
      messsage: "Vliza 2",
    });
  } catch (e) {
    console.log("test+++ error", e);
  }
});

export default router;
