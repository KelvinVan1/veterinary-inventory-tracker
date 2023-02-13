import Inventory from '../models/inventoryModel';
import {Types as MongooseType} from 'mongoose';
import { ItemController } from '../../types/types';

const itemController: ItemController = {
  getItems(req, res, next) {
    const { id } = req.params;
    Inventory.findOne({_id: id}).exec()
      .then(inventory => {
        if(inventory) res.locals.itemList = inventory.inventoryItems;
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },

  getItem(req, res, next){
    const {id} = req.params;

    Inventory.findOne({'inventoryItems._id': new MongooseType.ObjectId(id)}, {inventoryItems: {$elemMatch: {_id: new MongooseType.ObjectId(id)}}})
      .then((data) => {
        if(data){
          res.locals.item = data.inventoryItems[0];
        }
        return next();
      });
  },

  createItem(req, res, next) {
    const {itemName, dosing, type, remaining, expiration} = req.body;
    const {id} = req.params;
    
    const newItem = {_id: new MongooseType.ObjectId(), itemName, dosing, type, remaining, expiration};
    Inventory.updateOne({_id: id}, {$push : {inventoryItems: newItem}})
      .then(() => {  
        res.locals.item = newItem;     
        return next();
      });
  },

  updateItem(req, res, next) {
    const {itemName, dosing, type, remaining, expiration} = req.body;
    const {id} = req.params;

    const itemId = new MongooseType.ObjectId(id);
    const updatedItem = {_id: itemId, itemName, dosing, type, remaining, expiration};
    Inventory.updateOne({'inventoryItems._id': itemId}, 
      {$set: {'inventoryItems.$': updatedItem}})
      .then((data) => {
        if(data.acknowledged){
          res.locals.item = updatedItem;
        }
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },

  deleteItem(req, res, next) {
    const {id} = req.params;

    const itemId = new MongooseType.ObjectId(id);
    Inventory.updateOne({'inventoryItems._id': itemId}, 
      {$pull: {'inventoryItems': {_id: itemId}}})
      .then((data) => {
        res.locals.modified = data.modifiedCount;
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },

  calculateItem(req, res, next) {
    const {usage} = req.body;
    const {id} = req.params;

    const itemId = new MongooseType.ObjectId(id);
    const updatedItem = res.locals.item;

    updatedItem.remaining -= usage;
    if(updatedItem.remaining <= 0){
      Inventory.updateOne({'inventoryItems._id': itemId}, 
        {$pull: {'inventoryItems': {_id: itemId}}})
        .then((data) => {res.locals.modified = data.modifiedCount;});
    } 
    else {
      Inventory.updateOne({'inventoryItems._id': itemId}, 
        {$set: {'inventoryItems.$': updatedItem}})
        .then(() => res.locals.modified = updatedItem);
    }
    return next();
  }
};

export default itemController;