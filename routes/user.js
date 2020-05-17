const route = require("express").Router();
const User = require("../models/User");

route.get("/user", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.query.email });
    if (!user) {
      res
        .status(400)
        .send({ message: "Пользователя с таким эмейлом не существует" });
    } else {
      if (user.password === req.query.password) {
        res.send({
          _id: user._id,
          email: user.email,
          name: user.name,
          admin: user.admin
        });
      } else {
        res.status(400).send({ message: "Неправильный пароль" });
      }
    }
  } catch (error) {
    res.status(500).send({ message: "Ошибка внутри сервера!" });
  }
});

module.exports = route;
