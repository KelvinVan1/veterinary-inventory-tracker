import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('Item Component Mounted');
  }

  render() {
    return (
      <div className='item'>
        <h4>Name: {this.props.itemName} Current Stock: {this.props.currentStock} Ideal Stock: {this.props.idealStock}</h4>
      </div>
    );
  }
}

export default Item;