import Inventory from '../models/inventoryModel';
import { ItemController } from '../../types/types';
import * as mongoose from 'mongoose';

const itemController: ItemController = {
  getItems(req, res, next) {
    const { inventoryName } = req.body;
    Inventory.findOne({inventoryName}).exec()
      .then(inventory => {
        if(inventory) res.locals.itemList = inventory.inventoryItems;
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },

  createItem(req, res, next) {
    const {inventoryName, itemName, dosing, type, remaining, expiration} = req.body;
    
    Inventory.findOne({inventoryName})
      .then(inventory =>{
        const objID = new mongoose.Types.ObjectId();
        const newItem = {_id: objID,itemName, dosing, type, remaining, expiration};
        res.locals.item = newItem;
        if(inventory) {
          inventory.inventoryItems.push(newItem);
          inventory.save();
          return next();
        }
      });
  },

  updateItem(req, res, next) {
    const {id, inventoryName, itemName, dosing, type, remaining, expiration} = req.body;

    Inventory.findOne({inventoryName})
      .then(inventory => {
        if(inventory){
          const inventoryItems = inventory.inventoryItems;
          for(let i = 0; i < inventoryItems.length; i ++){
            if(inventoryItems[i]._id.toString() === id){
              const updatedItem = {_id: inventoryItems[i]._id, itemName, dosing, type, remaining, expiration};
              res.locals.item = updatedItem;
              inventory.inventoryItems[i] = updatedItem;
              inventory.save();
            }
          }
        }
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },

  deleteItem(req, res, next) {
    const {id, inventoryName} = req.body;

    Inventory.findOne({inventoryName})
      .then(inventory => {
        if(inventory){
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
        }
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },

  calculateItem(req, res, next) {
    const {id, inventoryName, remaining} = req.body;

    Inventory.findOne({inventoryName})
      .then(inventory => {
        if(inventory){
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
            }
          }
        }
        return next();
      })
      .catch(err => {
        return next(err);
      });
  }
}

export default itemController;