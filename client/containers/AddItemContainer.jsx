import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';


function CreateItem () {

  const { id } = useParams();
  const state = useLocation().state;
  

  const [name, setName] = useState('');
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
        <input autoComplete="off" name="name" placeholder="Doxycycline" onChange={input => setName(input.target.value)}/>
      </div>

      <div className="AddItemField">
        <label htmlFor="dosing">Dosing: </label>
        <input autoComplete="off" name="dosing" placeholder="0" onChange={input => setDosing(input.target.value)}/>
      </div>

      <div className="AddTypeField">
        <label htmlFor='type'>Type: </label>
        <select name='type' onChange={input => setType(input.target.value)}>
          <optgroup label="Capsules/Tablets">
            <option value="Tablets">Tablets</option>
            <option value="Chewable Tablets">Chewable Tablets</option>
            <option value="Capsules">Capsules</option>
            <option value="Sprinke Capsules">Sprinkle Capsules</option>
          </optgroup>
          <optgroup label="Liquid">
            <option value="Liquid">Liquid</option>
            <option value="Eye Drops">Eye Drops</option>
          </optgroup>
        </select>
      </div>
      
      <div className="AddItemField">
        <label htmlFor="remaining">Remaining: </label>
        <input autoComplete="off" name="remaining" placeholder="0" onChange={input => setRemaining(input.target.value)}/>
      </div>

      <div className="AddItemField">
        <label htmlFor="expiration">Expiration: </label>
        <input autoComplete="off" name="expiration" placeholder="1" onChange={input => setExpiration(input.target.value)}/>
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