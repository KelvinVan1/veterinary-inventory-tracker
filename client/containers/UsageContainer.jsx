import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function EditItem () {

  const { id } = useParams();
  const state = useLocation().state;

  const [remaining, setRemaining] = useState(0);

  function saveItem(){
    const body = {
      id,
      inventoryName: state.inventoryName,
      remaining,
    };
    console.log('Calculate body: ', body);
    fetch('/api/inventory/item/calc', {
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
      <h3>Usage Calculator: {state.remaining} remaining</h3>
      <div className="EditItemField">
        <label htmlFor="usage">Enter amount used: </label>
        <input autoComplete="off" name="usage" placeholder="0" onChange={input => setRemaining(input.target.value)}/>
      </div>

      <Link to={`/inventory/${id}`} state={{inventoryName: state.inventoryName}}>
        <button onClick={saveItem}>Calculate</button>
      </Link>

      <Link to={`/inventory/${id}`} state={{inventoryName: state.inventoryName}}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default EditItem;