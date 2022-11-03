import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <tr className='item'>
        <td className='item-name'>
          {this.props.itemName} 
        </td>
        <td className='dosing'>
          {this.props.dosing}
        </td>
        <td className='Type'>
          {this.props.type}
        </td>
        <td className='Remaining'>
          {this.props.remaining}
        </td>
        <td className='Expiration'>
          {this.props.expiration}
        </td>

        <td className='manage-button'>
          <Link to={`/edit/item/${this.props.id}`} state={this.props}>
            <button>Manage Item</button>
          </Link>
        </td>
        <td className='delete-button'>
          <Link to={`/delete/${this.props.id}`} state={this.props}>
            <button>Delete Item</button>
          </Link>
        </td>
      </tr>
    );
  }
}

export default Item;