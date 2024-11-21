import express from "express";
import { GetWeekByWeekInMonthResponse } from "./types";
import Finance from "../../db/models/Finance";
import { FinanceTypeEnum } from "../../db/models/Finance/types";

const router = express.Router();

router.get<{}, GetWeekByWeekInMonthResponse>(
  "/week-by-week-in-month/:year/:month/:userId",
  async (req, res) => {
    //@ts-ignore
    const { year, month, userId } = req.params;

    const monthToNumber = parseInt(month) + 1;

    const finances = await Finance.find({
      userId,
      createdAt: {
        $gte: new Date(`${year}-${monthToNumber}-01`),
        $lt: new Date(`${year}-${monthToNumber}-31`),
      },
      type: FinanceTypeEnum.EXPENSE,
    });

    const weeks: GetWeekByWeekInMonthResponse = {
      week1: 0,
      week2: 0,
      week3: 0,
      week4: 0,
    };

    finances.forEach((finance) => {
      const day = finance.createdAt.getDate();
      switch (true) {
        case day <= 7:
          weeks.week1 += finance.price;
          break;
        case day <= 14:
          weeks.week2 += finance.price;
          break;
        case day <= 21:
          weeks.week3 += finance.price;
          break;
        default:
          weeks.week4 += finance.price;
          break;
      }
    });

    res.json(weeks);
  }
);

export { router };
