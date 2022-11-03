import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';


function CreateItem () {

  const { id } = useParams();
  const state = useLocation().state;
  

  const [name, setName] = useState('');
  const [currentStock, setCurrentStock] = useState(0);
  const [idealStock, setIdealStock] = useState(0);

  function saveItem(){
    const body = {
      id,
      inventoryName: state.inventoryName,
      itemName: name,
      currentStock,
      idealStock,
    };

    fetch('/api/inventory/item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((err) => {
        console.log(err);
      });

  }

  return(
    <div className="add-item">
      <h3>Add Item:</h3>
      <div className="addItemField">
        <label htmlFor="name">Item: </label>
        <input name="name" placeholder="Doxycycline" onChange={input => setName(input.target.value)}/>
      </div>

      <div className="AddItemField">
        <label htmlFor="currentStock">Current Stock: </label>
        <input name="currentStock" placeholder="0" onChange={input => setCurrentStock(input.target.value)}/>
      </div>

      <div className="AddItemField">
        <label htmlFor="idealStock">Ideal Stock: </label>
        <input name="idealStock" placeholder="1" onChange={input => setIdealStock(input.target.value)}/>
      </div>
      <Link to={`/inventory/${id}`} state={{inventoryName: state.inventoryName}}>
        <button onClick={saveItem}>Submit</button>
      </Link>

      <Link to={`/inventory/${id}`} state={{inventoryName: state.inventoryName}}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default CreateItem;