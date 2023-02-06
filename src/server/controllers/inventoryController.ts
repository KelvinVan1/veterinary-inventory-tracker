import Inventory from '../models/inventoryModel';
import { InventoryController } from '../../types/types';

const inventoryController: InventoryController = {

  getInventory (req, res, next) {
    Inventory.find({}).exec()
      .then(data => {
        for(let i = 0; i < data.length; i++) {
          data[i].currentStock = data[i].inventoryItems.length;
        }
        res.locals.itemList = data;
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },

  createInventory (req, res, next) {
    const {inventoryName, currentStock, idealStock, category} = req.body;
    Inventory.create({inventoryName, currentStock, idealStock, category})
      .then(data => {
        res.locals.item = data;
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },

  updateInventory (req, res, next) {
    const {id, inventoryName, currentStock, idealStock, category} = req.body;
    Inventory.findByIdAndUpdate(id, {inventoryName, currentStock, idealStock, category})
      .then(data => {
        res.locals.item = data;
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },

  deleteInventory (req, res, next) {
    const {id} = req.body;

    Inventory.findByIdAndDelete(id)
      .then(data => {
        console.log('DELETED');
        res.locals.item = data;
        return next();
      })
      .catch(err => {
        return next(err);
      });
  }
};

module.exports = inventoryController;