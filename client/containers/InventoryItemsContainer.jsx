import React, { useEffect, useState, useRef} from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Item from '../components/Item.jsx';

function InventoryItemsContainer () {

  const { id } = useParams();
  const state = useLocation().state;

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const body = {inventoryName: state.inventoryName};
    fetch('/api/inventory/item/obtainitems', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(data => {
        const newitemList = [];
        console.log('Data: ', data);
        data.forEach(({_id, itemName, dosing, type, remaining, expiration}) => {
          newitemList.push(
            <Item id = {_id} inventoryName = {state.inventoryName} itemName = {itemName} dosing = {dosing} type = {type} remaining = {remaining} expiration = {expiration} key={Math.random() * 300}/>
          );
        });
        setItemList(newitemList);
        console.log('State: ', this.state);
      })
      .catch(err => {
        console.log('Error:', err);
      });  
  },[itemList.length]);

  return(
    <div>
      <table className='item-list'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Dosing</th>
            <th>Type</th>
            <th>Remaining</th>  
            <th>Expiration</th>
            <th>Manage Item</th>
            <th>Delete Item</th> 
          </tr>
        </thead>

        <tbody>
          {itemList}
        </tbody>

      </table>

      <Link to={`/add/item/${id}`} state={{inventoryName: state.inventoryName}}>
        <button>Add Item!</button>
      </Link>

      <Link to={'/'}>
        <button>Back!</button>
      </Link>
    </div>
  );}

export default InventoryItemsContainer;