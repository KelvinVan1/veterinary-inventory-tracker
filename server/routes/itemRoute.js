const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');

//Get Request which will obtain all items in inventory
router.post('/obtainitems', itemController.getItems, (req, res) => {
  console.log(res.locals.itemList);
  return res.status(200).send(res.locals.itemList);
});

//Post Request to add new items to inventory
router.post('/', itemController.createItem,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

//Patch Request to update an existing item in inventory
router.patch('/', itemController.updateItem,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

//Delete Request to delete an existing item in inventory
router.delete('/', itemController.deleteItem,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

module.exports = router;