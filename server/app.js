import express from "express";
import cors from "cors";
import morgan from "morgan";

import userRoutes from "./routes/user-routes.js";
import connectDb from "./db/connect.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(userRoutes);

connectDb().then(() => console.log("DB connected!"));

app.listen(7000, () => {
  console.log(`Server is running on port 7000`);
});
