const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const itemSchema = new Schema({
  itemName: {type: String, required: true, unique: true},
  currentStock: {type: Number, required: true},
  idealStock: {type: Number, required: true},
}, {collection: 'Items'});

const Item = mongoose.model('Item', itemSchema);

module.exports = {
  Item
};