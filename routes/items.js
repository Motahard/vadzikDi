const route = require("express").Router();
const Item = require("../models/Item");

route.get("/items", async (req, res) => {
  try {
    const item = await Item.find({});
    res.send(item);
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
});

route.post("/items", async (req, res) => {
  try {
    const { personName, itemName, count, date, outgo, category } = req.body;
    const item = new Item({
      personName: personName,
      itemName: itemName,
      count: count,
      date: date,
      outgo: outgo,
      category: category
    });
    const savedItem = await item.save();
    res.send(savedItem);
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
});

route.put("/items", async (req, res) => {
  try {
    const { _id, personName, itemName, count, outgo, category } = req.body;
    await Item.findByIdAndUpdate({_id: _id}, {
      personName: personName,
      itemName: itemName,
      count: count,
      outgo: outgo,
      category: category
    }, { new: true },(err, doc) => {
      if (err) res.status(400).send({ msg: err.message });
      res.send(doc);
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
});

route.delete("/items", async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.query.itemId);
    res.send(item);
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
});

module.exports = route;
