import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Inventory from '../components/Inventory.jsx';
import Item from '../components/Item.jsx';

class MainContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      itemList: []
    };
  }

  componentDidMount(){
    console.log('App Component Mounted');
    fetch('/api/inventory/')
      .then(res => res.json())
      .then(data => {
        const newitemList = [];
        console.log('Data: ', data);
        data.forEach(({_id, inventoryName, currentStock, idealStock}) => {
          newitemList.push(
            <Inventory id = {_id} inventoryName = {inventoryName} currentStock = {currentStock} idealStock = {idealStock} key={Math.floor(Math.random() * 300)}/>
          );
        });
        this.setState({itemList: newitemList});
        console.log('State: ', this.state);
      })
      .catch(err => {
        console.log('Error:', err);
      }); 
  }


  render() {
    console.log('IN RENDER', this.state);
    if (this.state.itemList.length === 0) 
      return(
        <div>
          <h1>Loading data, please wait...</h1>
        </div>
      );

    return (
      <div>
        <table className='item-list'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Current Stock</th>  
              <th>Ideal Stock</th>
              <th>Availability </th>
              <th>Manage Item</th>
              <th>Edit Details</th>
              <th>Delete Item</th> 
            </tr>
          </thead>

          <tbody>
            {this.state.itemList}
          </tbody>

        </table>

        <Link to='/add/inventory'>
          <button>Add Item!</button>
        </Link>
      </div>
    );
  }
}

export default MainContainer;