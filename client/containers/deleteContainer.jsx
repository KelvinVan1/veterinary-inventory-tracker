import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';


function deleteItem () {

  const { id } = useParams();
  const state = useLocation().state;

  function deleteItem() {
    const body = state;

    console.log('Test:', body);

    fetch('/api/inventory/item', {
      method: 'DELETE',
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
    <div className="delete-item">
      <h3>Are you sure you want to delete this item?</h3>
      <Link to={`/inventory/${id}`} state={{inventoryName: state.inventoryName}}>
        <button onClick={deleteItem}>Yes</button>
      </Link>

      <Link to={`/inventory/${id}`} state={{inventoryName: state.inventoryName}}>
        <button>No</button>
      </Link>
    </div>
  );
}

export default deleteItem;