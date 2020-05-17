const express = require("express");
const app = express();
const connectDB = require("./db");
const userRoute = require("./routes/user");
const itemsRoute = require("./routes/items");
const movingRoute = require("./routes/moving");

connectDB();

app.use(express.json());
app.use("/api", userRoute);
app.use("/api", itemsRoute);
app.use("/api", movingRoute);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log("Сервер запущен по порту: ", PORT));
