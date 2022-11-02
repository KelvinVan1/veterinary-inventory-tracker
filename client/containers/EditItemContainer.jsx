import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function EditItem () {

  const { id } = useParams();
  const data = useLocation().state;

  const [name, setName] = useState(data.itemName);
  const [currentStock, setCurrentStock] = useState(data.currentStock);
  const [idealStock, setIdealStock] = useState(data.idealStock);

  function saveItem(){
    const body = {
      id,
      itemName: name,
      currentStock,
      idealStock,
    };

    fetch('/api/inventory', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="edit-item">
      <h3>Edit Item:</h3>
      <div className="editItemField">
        <label htmlFor="name">Item: </label>
        <input name="name" placeholder="Doxycycline" value={name} onChange={input => setName(input.target.value)}/>
      </div>

      <div className="editItemField">
        <label htmlFor="currentStock">Current Stock: </label>
        <input name="currentStock" placeholder="0" value={currentStock} onChange={input => setCurrentStock(input.target.value)}/>
      </div>

      <div className="editItemField">
        <label htmlFor="idealStock">Ideal Stock: </label>
        <input name="idealStock" placeholder="1" value={idealStock} onChange={input => setIdealStock(input.target.value)}/>
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