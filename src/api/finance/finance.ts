import express from "express";
import {
  FinanceGetAll,
  FinanceResponseCreate,
  FinancesGetMonthlyTransactionsResponse,
  WeeksType,
} from "./types";
import Finance from "../../db/models/Finance";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ObjectId } from "mongodb";
import AccountBalance from "../../db/models/AccountBalance";
import {
  FinancePopulatedType,
  FinanceTypeEnum,
  GetRecentTransactionsResponse,
} from "../../db/models/Finance/types";
import { CategorySchemaType } from "../../db/models/Category/types";
import { AccountBalanceSchemaType } from "../../db/models/AccountBalance/types";

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

router.post<{}, FinanceGetAll>("/totalBudget", async (req, res) => {
  try {
    // Here must return sum of all expenses and income
    // For example:
    // From 11.11.2024 -> 10.12.2024
    // Let's says it's 21.11.24 we go with above dates
    // If it's 10.12.2024 what we do? We get from 10.11.2024 -> 10.12.2024
    // If it's 11.12.2024 we get from 10.12.2024 -> 10.01.2025

    const { userId } = req.body;

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();

    let startDate,
      endDate,
      daysLeft,
      totalIncome = 0,
      totalExpense = 0;

    if (currentDay >= 11) {
      startDate = new Date(currentDate.getFullYear(), currentMonth, 11);
      endDate = new Date(currentDate.getFullYear(), currentMonth + 1, 10);
    } else {
      startDate = new Date(currentDate.getFullYear(), currentMonth - 1, 11);
      endDate = new Date(currentDate.getFullYear(), currentMonth, 10);
    }

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsDifference = endDate.getTime() - currentDate.getTime();

    daysLeft = Math.ceil(millisecondsDifference / millisecondsPerDay);

    const finances = await Finance.find({
      userId,
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    finances.forEach((finance) => {
      if (finance.type === FinanceTypeEnum.INCOME)
        return (totalIncome += finance.price);

      if (finance.type === FinanceTypeEnum.EXPENSE)
        return (totalExpense += finance.price);
    });

    const difference = totalIncome - totalExpense;
    const moneyLeftPerDay = difference / daysLeft;
    const differenceInPercentage = totalExpense / totalIncome;

    res.json({
      totalIncome,
      totalExpense,
      difference,
      moneyLeftPerDay,
      differenceInPercentage,
    });
  } catch (e) {
    console.log("Error:", e);
  }
});

router.get<{}, GetRecentTransactionsResponse>(
  "/recent/:userId",
  async (req, res) => {
    //@ts-ignore
    const { userId } = req.params;

    const finances = await Finance.find({
      userId,
    })
      .populate<CategorySchemaType>("category")
      .populate<AccountBalanceSchemaType>("accountBalance")
      .limit(10);

    res.json(finances as unknown as FinancePopulatedType[]);
  }
);

router.get<{}, FinancesGetMonthlyTransactionsResponse>(
  "/monthlyTransactions/:userId/:month/:category",
  async (req, res) => {
    //@ts-ignore
    const { userId, month, category } = req.params;

    const monthToNumber = parseInt(month) + 1;

    const finances = await Finance.find({
      userId,
      createdAt: {
        $gte: new Date(new Date().getFullYear(), monthToNumber - 1, 1),
        $lt: new Date(new Date().getFullYear(), monthToNumber, 1),
      },
    })
      .populate<CategorySchemaType>("category")
      .populate<AccountBalanceSchemaType>("accountBalance");

    const weeks: WeeksType = {
      week1: [],
      week2: [],
      week3: [],
      week4: [],
    };

    const pushToWeeks = (finance: FinancePopulatedType, week: string) => {
      if (
        category.toLowerCase() === "виж всички" ||
        finance.category.name === category
      )
        weeks[week].push(finance);
    };

    finances.forEach((finance) => {
      const day = finance.createdAt.getDate();
      switch (true) {
        case day <= 7:
          // @ts-ignore
          pushToWeeks(finance, "week1");
          break;
        case day <= 14:
          // @ts-ignore
          pushToWeeks(finance, "week2");
          break;
        case day <= 21:
          // @ts-ignore
          pushToWeeks(finance, "week3");
          break;
        default:
          // @ts-ignore
          pushToWeeks(finance, "week4");
          break;
      }
    });

    res.json(weeks);
  }
);

export { router };
