import {Schema, model} from 'mongoose'

const itemSchema = new Schema({
  itemName: {type: String, required: true},
  dosing: {type: String, required: true},
  type: {type: String, required: true},
  remaining: {type: String, required:true},
  expiration: {type: String}
});
const Item = model('Item', itemSchema);

export default Item