const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');

router.get('/', (req, res) => {
  return res.status(200).send({name: 'Kelvin'});
});

router.post('/', itemController.createItem,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

module.exports = router;