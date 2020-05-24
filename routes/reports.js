const route = require("express").Router();
const Item = require("../models/Item");
const Moving = require("../models/Moving");

route.post("/reports", async (req, res) => {
  try {
    const { category, date } = req.body;
    if (category === "moving") {
      const movings = await Moving.find({});
      const result = [];
      movings.forEach(moving => {
        const day = new Date(moving.date).getDate();
        const month = new Date(moving.date).getMonth();
        const year = new Date(moving.date).getFullYear();

        const cday = new Date().getDate();
        const cmonth = new Date().getMonth();
        const cyear = new Date().getFullYear();

        switch (date) {
          case "day": {
            if (day === cday && month === cmonth && year === cyear) {
              result.push(moving);
            }
            break;
          }
          case "week": {
            // if (day - cday  && month === cmonth && year === cyear) {
            //   result.push(moving);
            // }
            break;
          }
          case "month": {
            if (month === cmonth && year === cyear) {
              result.push(moving);
            }
            break;
          }
          case "period": {
            break;
          }
          case "year": {
            if (year === cyear) {
              result.push(moving);
            }
            break;
          }
          default: {
            break;
          }
        }
      });
      res.send({result, category: category});
    } else if (category === "items") {
      const items = await Item.find({});
      const result = [];
      items.forEach(item => {
        const day = new Date(item.timestamp).getDate();
        const month = new Date(item.timestamp).getMonth();
        const year = new Date(item.timestamp).getFullYear();

        const cday = new Date().getDate();
        const cmonth = new Date().getMonth();
        const cyear = new Date().getFullYear();
        switch (date) {
          case "day": {
            if (day === cday && month === cmonth && year === cyear) {
              result.push(item);
            }
            break;
          }
          case "week": {
            if (day - cday  && month === cmonth && year === cyear) {
              result.push(item);
            }
            break;
          }
          case "month": {
            if (month === cmonth && year === cyear) {
              result.push(item);
            }
            break;
          }
          case "period": {
            break;
          }
          case "year": {
            if (year === cyear) {
              result.push(item);
            }
            break;
          }
          default: {
            break;
          }
        }
      });
      res.send({result, category: category});
    } else {
      res.status(400).send({ msg: "Nevernaya categoriya" });
    }
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
});

module.exports = route;
