import {Router} from 'express';
import itemController from '../controllers/itemController'

const itemRouter = Router()


//Request which will obtain all items in inventory
itemRouter.post('/obtainitems', itemController.getItems, (req, res) => {
  return res.status(200).send(res.locals.itemList);
});

//Post Request to add new items to inventory
itemRouter.post('/', itemController.createItem,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

//Patch Request to calculate usuage of an item
itemRouter.patch('/calc', itemController.calculateItem, (req, res) => {
  return res.status(200).send(res.locals.itemList);
});


//Patch Request to update an existing item in inventory
itemRouter.patch('/', itemController.updateItem,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

//Delete Request to delete an existing item in inventory
itemRouter.delete('/', itemController.deleteItem,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

export default itemRouter;