import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props);

    this.calculatePrecentage = this.calculatePrecentage.bind(this);
  }

  calculatePrecentage(){
    return (this.props.currentStock / this.props.idealStock) * 100;
  }

  render() {
    return (
      <tr className='item'>
        <td className='item-name'>
          {this.props.itemName} 
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
        <td className='edit-button'>
          <button>Edit</button>
        </td>
      </tr>
    );
  }
}

export default Item;