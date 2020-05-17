const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://Alexander:Gg02067890@kursachh-ks9ct.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => console.log("db connected")
  );
}

module.exports = connectDB;
