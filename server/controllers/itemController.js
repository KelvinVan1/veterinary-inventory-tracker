const { Inventory } = require('../models/inventoryModel');
const mongoose = require('mongoose');

const itemController = {};

itemController.getItems = (req, res, next) => {
  const { inventoryName } = req.body;
  Inventory.findOne({inventoryName}).exec()
    .then(inventory => {
      res.locals.itemList = inventory.inventoryItems;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};


itemController.createItem = (req, res, next) => {
  const {inventoryName, itemName, dosing, type, remaining, expiration} = req.body;
  
  Inventory.findOne({inventoryName})
    .then(inventory =>{
      const objID = mongoose.Types.ObjectId();
      const newItem = {_id: objID,itemName, dosing, type, remaining, expiration};
      res.locals.item = newItem;
      inventory.inventoryItems.push(newItem);
      inventory.save();
      return next();
    });
};

itemController.updateItem = (req, res, next) => {
  const {id, inventoryName, itemName, dosing, type, remaining, expiration} = req.body;

  Inventory.findOne({inventoryName})
    .then(inventory => {
      const inventoryItems = inventory.inventoryItems;
      for(let i = 0; i < inventoryItems.length; i ++){
        
        if(inventoryItems[i]._id.toString() === id){
          const updatedItem = {_id: inventoryItems[i]._id, itemName, dosing, type, remaining, expiration};
          res.locals.item = updatedItem;
          inventory.inventoryItems[i] = updatedItem;
          inventory.save();
        }
      }
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

itemController.deleteItem = (req, res, next) => {
  const {id, inventoryName} = req.body;

  Inventory.findOne({inventoryName})
    .then(inventory => {
      const inventoryItems = inventory.inventoryItems;
      const newItemList = [];
      for(let i = 0; i < inventoryItems.length; i ++){
        if(inventoryItems[i]._id.toString() !== id){
          newItemList.push(inventoryItems[i]);
        }
        else {
          res.locals.item = inventoryItems[i];
        }
      }

      inventory.inventoryItems = newItemList;
      inventory.save();

      return next();
    })
    .catch(err => {
      return next(err);
    });
};

itemController.calculateItem = (req, res, next) => {
  const {id, inventoryName, remaining} = req.body;

  Inventory.findOne({inventoryName})
    .then(inventory => {
      for(let i = 0; i < inventory.inventoryItems.length; i ++){
        if(inventory.inventoryItems[i]._id.toString() === id){
          const updatedItem = inventory.inventoryItems[i];

          updatedItem.remaining -= remaining;
          updatedItem.remaining = updatedItem.remaining.toString();

          if(updatedItem.remaining <= 0) {
            res.locals.item = updatedItem;
            inventory.inventoryItems.splice(i, 1);
            inventory.save();
            return next();
          }

          res.locals.item = updatedItem;
          inventory.inventoryItems[i] = updatedItem;
          inventory.save();
          return next();
        }
      }
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = itemController;