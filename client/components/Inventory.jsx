import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

class Inventory extends Component {
  constructor(props){
    super(props);

    this.calculatePrecentage = this.calculatePrecentage.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  calculatePrecentage(){
    if(this.props.idealStock === 0) return 0;
    return (this.props.currentStock / this.props.idealStock) * 100;
  }


  deleteItem() {
    fetch('/api/inventory', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: this.props.id}),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <tr className='item'>
        <td className='item-name'>
          {this.props.inventoryName} 
        </td>
        <td className='current-stock'>
          {this.props.currentStock}
        </td>
        <td className='ideal-stock'>
          {this.props.idealStock}
        </td>
        <td className='availability'>
          {this.calculatePrecentage().toFixed(2)}%
        </td>

        <td className='manage-button'>
          <Link to={`/inventory/${this.props.id}`} state={{ inventoryName: this.props.inventoryName, currentStock: this.props.currentStock, idealStock: this.props.idealStock}}>
            <button>Manage Item</button>
          </Link>
        </td>
        <td className='edit-button'>
          <Link to={`/edit/inventory/${this.props.id}`} state={{ inventoryName: this.props.inventoryName, currentStock: this.props.currentStock, idealStock: this.props.idealStock}}>
            <button>Edit Details</button>
          </Link>
        </td>
        <td className='delete-button'>
          <Link to={'/'} reloadDocument={true}>
            <button onClick={this.deleteItem}>Delete</button>
          </Link>
        </td>
      </tr>
    );
  }
}

export default Inventory;