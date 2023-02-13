import {Schema, model} from 'mongoose';

const inventorySchema = new Schema({
  inventoryName: {type: String, required: true, unique: true},
  currentStock: {type: Number, required: true},
  idealStock: {type: Number, required: true},
  category: {type: String, default: 'default'},
  inventoryItems: [],
  
}, {collection: 'Inventory'});
const Inventory = model('Inventory', inventorySchema);

export default Inventory;