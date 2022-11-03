import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function EditItem () {

  const { id } = useParams();
  const data = useLocation().state;

  const [inventoryName, setName] = useState(data.inventoryName);
  const [idealStock, setIdealStock] = useState(data.idealStock);

  function saveItem(){
    const body = {
      id,
      inventoryName,
      currentStock: data.currentStock,
      idealStock,
    };

    fetch('/api/inventory', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(data => console.log('Data:', data))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="edit-item">
      <h3>Edit Item:</h3>
      <div className="editItemField">
        <label htmlFor="name">Item: </label>
        <input autoComplete="off" name="name" placeholder="Doxycycline" value={inventoryName} onChange={input => setName(input.target.value)}/>
      </div>

      <div className="editItemField">
        <label htmlFor="idealStock">Ideal Stock: </label>
        <input autoComplete="off" name="idealStock" placeholder="1" value={idealStock} onChange={input => setIdealStock(input.target.value)}/>
      </div>
      <Link to='/'>
        <button onClick={saveItem}>Submit</button>
      </Link>

      <Link to='/'>
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default EditItem;