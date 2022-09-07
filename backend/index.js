require("dotenv").config();

const connectDatabase = require("./database");
const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

connectDatabase();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

if (process.env.ENVIRONMENT === "dev") {
  app.use(morgan("dev"));
}

app.use("/backend/uploads", express.static(path.join(__dirname, "uploads")));

/*      Using Routes     */
app.use("/api/auth/admin", adminRoute);
app.use("/api/auth/user", userRoute);

app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.listen(process.env.PORT, () => {
  console.log(`server started > listening on PORT ${process.env.PORT}`);
});
