const route = require("express").Router();
const Moving = require("../models/Moving");

route.get("/moving", async (req, res) => {
  try {
    const item = await Moving.find({});
    res.send(item);
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
});

route.post("/moving", async (req, res) => {
  try {
    const { itemName, count, date, time, from, category, to, reason } = req.body;
    const moving = new Moving({
      itemName: itemName,
      count: count,
      date: date,
      time: time,
      from: from,
      category: category,
      to: to,
      reason: reason
    });
    const savedItem = await moving.save();
    res.send(savedItem);
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
});

route.put("/moving", async (req, res) => {
  try {
    const { _id, itemName, count, date, time, from, category, to, reason } = req.body;
    await Moving.findByIdAndUpdate({_id: _id}, {
      itemName: itemName,
      count: count,
      date: date,
      time: time,
      category: category,
      from: from,
      to: to,
      reason: reason
    }, { new: true },(err, doc) => {
      if (err) res.status(400).send({ msg: err.message });
      res.send(doc);
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
});

route.delete("/moving", async (req, res) => {
  try {
    const item = await Moving.findByIdAndDelete(req.query.movingId);
    res.send(item);
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
});

module.exports = route;
