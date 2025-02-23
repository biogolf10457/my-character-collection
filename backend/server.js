import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./router/auth.js";
import protectedRouter from "./router/protected.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middle ware
app.use(cors());
app.use(express.json()); // middleware that allow app to accept JSON data in req.body

app.use("/api/auth", authRouter);
app.use("/api", protectedRouter);

app.listen(PORT, () => {
  connectDB();
  console.log("Server start at http://localhost:" + PORT);
});
