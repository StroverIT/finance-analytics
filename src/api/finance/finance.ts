import express from "express";
import { FinanceGetAll, FinanceResponseCreate } from "./types";
import Finance from "../../db/models/Finance";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ObjectId } from "mongodb";
import AccountBalance from "../../db/models/AccountBalance";

const router = express.Router();

router.post<{}, FinanceResponseCreate>("/create", async (req, res) => {
  try {
    const {
      userId,
      categoryId,
      accountBalanceId,
      article,
      price,
      billImage,
      type,
    } = req.body;

    await Finance.create({
      userId,
      category: new ObjectId(categoryId),
      accountBalance: new ObjectId(accountBalanceId),
      article,
      price: parseFloat(price),
      billImage,
      type,
    });

    const incCondition = {
      $inc: {
        balance: type === "income" ? parseFloat(price) : -parseFloat(price),
      },
    };

    await AccountBalance.updateOne(
      {
        _id: new ObjectId(accountBalanceId),
      },
      incCondition
    );

    res.json({
      message: "Успешно",
    });
  } catch (e) {
    res.json({
      error: "Нещо се прецака",
    });
    console.log("Error: ", e);
  }
});

router.post<{}, FinanceResponseCreate>("/transfer", async (req, res) => {
  try {
    const { from, to, amount } = req.body;

    const incCondition = {
      $inc: {
        balance: -parseFloat(amount),
      },
    };

    await AccountBalance.updateOne(
      {
        _id: new ObjectId(from),
      },
      incCondition
    );

    const incConditionTo = {
      $inc: {
        balance: parseFloat(amount),
      },
    };

    await AccountBalance.updateOne(
      {
        _id: new ObjectId(to),
      },
      incConditionTo
    );

    res.json({
      message: "Успешно",
    });
  } catch (e) {
    res.json({
      error: "Нещо се прецака",
    });
    console.log("Error: ", e);
  }
});

router.get<{}, FinanceGetAll>("/", async (req, res) => {
  try {
    const { user } = req.body;
    res.json({
      messsage: "Vliza 2",
    });
  } catch (e) {
    console.log("Error:", e);
  }
});

export { router };
