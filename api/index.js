const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const productRoute = require("./routes/products.js");
const cartRoute = require("./routes/carts.js");
const orderRoute = require("./routes/orders.js");
//const stripeRoute = require("./routes/stripe");
const cors = require("cors");

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });



app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
//app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});