import {Router} from 'express';
import inventoryController from '../controllers/inventoryController';

const inventoryRouter = Router();

//Get Request which will obtain all items in inventory
inventoryRouter.get('/', inventoryController.getInventory, (req, res) => {
  console.log(res.locals.itemList);
  return res.status(200).send(res.locals.itemList);
});

//Post Request to add new items to inventory
inventoryRouter.post('/', inventoryController.createInventory,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

//Patch Request to update an existing item in inventory
inventoryRouter.patch('/', inventoryController.updateInventory,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

//Delete Request to delete an existing item in inventory
inventoryRouter.delete('/', inventoryController.deleteInventory,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

export default inventoryRouter;
