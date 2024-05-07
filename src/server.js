const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const transactions = require("../routes/transactions");
const connectDB = require("../config/connection");

dotenv.config({ path: "./config/config.env" });
const app = express();

app.use(express.json())
app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;
connectDB(); 

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on Port: ${PORT}`.yellow.bold
  );
});
