import express from "express";
import dataRoutes from "./server/routes/dataRoutes.js";
import cors from "cors";
import connectDB from "./server/config/db.js";
import { config } from "dotenv";
config();

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", dataRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
