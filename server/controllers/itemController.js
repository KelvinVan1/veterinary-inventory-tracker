const Items = require('../models/itemModel');

const itemController = {};

itemController.createItem = (req, res, next) => {
  const {itemName, currentStock, idealStock} = req.body;
  Items.create({itemName: itemName, currentStock: currentStock, idealStock: idealStock})
    .then(data => {
      res.locals.item = data;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = itemController;