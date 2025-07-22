const express = require("express");
const connectDB = require("./DB/db");
const router = require("./Routes/contactRoutes");

connectDB();

const app = express();
app.use(express.json());
app.use("/contact", router);

app.listen(4000, () => {
  console.log("running");
});
