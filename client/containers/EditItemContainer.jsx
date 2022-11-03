import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function EditItem () {

  const { id } = useParams();
  const state = useLocation().state;

  const [name, setName] = useState(state.itemName);
  const [dosing, setDosing] = useState('0 ml/kg');
  const [type, setType] = useState('Liquid');
  const [remaining, setRemaining] = useState(0);
  const [expiration, setExpiration] = useState('today');

  function saveItem(){
    const body = {
      id,
      inventoryName: state.inventoryName,
      itemName: name,
      dosing,
      type,
      remaining,
      expiration,
    };

    fetch('/api/inventory/item', {
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
      <div className="EditItemField">
        <label htmlFor="name">Item: </label>
        <input name="name" placeholder="Doxycycline" value={name} onChange={input => setName(input.target.value)}/>
      </div>

      <div className="EditItemField">
        <label htmlFor="dosing">Dosing: </label>
        <input name="dosing" placeholder="0" value={dosing} onChange={input => setDosing(input.target.value)}/>
      </div>

      <div className="EditItemField">
        <label htmlFor="type">Type: </label>
        <input name="type" placeholder="1" value={type} onChange={input => setType(input.target.value)}/>
      </div>
      <div className="EditItemField">
        <label htmlFor="remaining">Remaining: </label>
        <input name="remaining" placeholder="0" value={remaining} onChange={input => setRemaining(input.target.value)}/>
      </div>

      <div className="EditItemField">
        <label htmlFor="expiration">Expiration: </label>
        <input name="expiration" placeholder="1" value={expiration} onChange={input => setExpiration(input.target.value)}/>
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

export default EditItem;