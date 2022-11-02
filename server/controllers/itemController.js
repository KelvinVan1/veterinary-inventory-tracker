const Items = require('../models/itemModel');

const itemController = {};

itemController.getItems = (req, res, next) => {
  const items = [];

  Items.find({}).exec()
    .then(data => {
      res.locals.itemList = data;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

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

itemController.updateItem = (req, res, next) => {
  const {id, itemName, currentStock, idealStock} = req.body;

  Items.findByIdAndUpdate(id, {itemName, currentStock, idealStock})
    .then(data => {
      res.locals.item = data;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = itemController;