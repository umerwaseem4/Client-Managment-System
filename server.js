import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";

import routes from "./server/routes/router.js";
import connectDB from "./server/database/connection.js";

dotenv.config({ path: ".env" });

const app = express();
const PORT = process.env.PORT || 8080;

// log req
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("assets"));

// mongodb connection
connectDB();

// load routers
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});