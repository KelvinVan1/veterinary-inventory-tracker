import {Router} from 'express';
import itemController from '../controllers/itemController'

const itemRouter = Router()


//Request which will obtain all items in inventory
itemRouter.get('/:id', itemController.getItems, (req, res) => {
  return res.status(200).send(res.locals.itemList);
});


//Request which will obtain one specific item in inventory
itemRouter.get('/single/:id', itemController.getItem, (req, res) => {
  return res.status(200).send(res.locals.item);
});

//Post Request to add new items to inventory
itemRouter.post('/:id', itemController.createItem,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

//Patch Request to calculate usuage of an item
itemRouter.patch('/calc/:id', itemController.getItem, itemController.calculateItem, (req, res) => {
  return res.status(200).send(res.locals.modified);
});

//Patch Request to update an existing item in inventory
itemRouter.patch('/:id', itemController.updateItem,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

//Delete Request to delete an existing item in inventory
itemRouter.delete('/:id', itemController.deleteItem,  (req, res) => {
  return res.status(200).send(`Modified: ${res.locals.modified}`);
});

export default itemRouter;