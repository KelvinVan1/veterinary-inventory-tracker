import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      itemName: '',
      currentStock: 0,
      idealStock: 0
    };

    this.saveItem = this.saveItem.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  saveItem(){
    const body = Object.assign(this.state);

    fetch('/api/inventory', {
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

  updateState(input){
    const type = input.target.name;
    const newState = Object.assign(this.state);

    /* eslint-disable indent */
    switch(type){
      case 'name':
        newState.itemName = input.target.value;
        break;
      case 'currentStock':
        newState.currentStock = input.target.value;
        break;

      case 'idealStock':
        newState.idealStock = input.target.value;
        break;
        
      default:
        break;
    }
    /* eslint-enable indent */
  }

  render() {
    return (
      <div className="create-item">

        <div className="createItemField">
          <label htmlFor="name">Item: </label>
          <input name="name" placeholder="Doxycycline" onChange={this.updateState}/>
        </div>

        <div className="createItemField">
          <label htmlFor="currentStock">Current Stock: </label>
          <input name="currentStock" placeholder="0" onChange={this.updateState}/>
        </div>

        <div className="createItemField">
          <label htmlFor="idealStock">Ideal Stock: </label>
          <input name="idealStock" placeholder="1" onChange={this.updateState}/>
        </div>
        
        <Link to='/'>
          <button onClick={this.saveItem}>Submit</button>
        </Link>

        <Link to='/'>
          <button>Cancel</button>
        </Link>

      </div>
    );
  }
}

export default CreateItem;