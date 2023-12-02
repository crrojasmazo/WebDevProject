//index.js
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("../config/db");
const userRouter = require("../services/users/users.routes");
const currencyRouter = require("../services/currency/currencies.routes");
const faqsRouter = require("../services/faqs/faqs.routes");
const errorMiddleware = require("../middleware/errorMiddleware");
const path = require("path");

app.use(express.json()); // middleware que transforma la req.body en un json
app.use(cors());

const PORT = process.env.PORT;

app.use(express.static("build"));

db();

app.use("/api/users", userRouter);
app.use("/api/currency", currencyRouter);
app.use("/api/faqs", faqsRouter);

app.use(errorMiddleware);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
