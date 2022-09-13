require("dotenv").config();

const connectDatabase = require("./database");
const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const categoryRoute = require("./routes/category");
const vendorRoute = require("./routes/vendor");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.ENVIRONMENT === "dev") {
  app.use(morgan("dev"));
}

app.use("/backend/uploads", express.static(path.join(__dirname, "uploads")));

/*      Using Routes     */
app.use("/api/auth/admin", adminRoute);
app.use("/api/auth/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/vendor", vendorRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.listen(process.env.PORT, () => {
  console.log(`server started > listening on PORT ${process.env.PORT}`);
});
