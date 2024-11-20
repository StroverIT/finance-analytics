import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import * as middlewares from "./middlewares";
import api from "./api";

import { initializeFireBaseApp } from "./libs/firebaseConfig";

// import MessageResponse from "./interfaces/MessageResponse";
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from "mongoose";

require("dotenv").config();

const app = express();
initializeFireBaseApp();
mongoose.connect(process.env.MONGO_URI as string);

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// app.get<{}, MessageResponse>("/", (req, res) => {
//   res.json({
//     message: "Home screen brat initial",
//   });
// });

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
