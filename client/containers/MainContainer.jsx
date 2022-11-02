import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    fetch('/api/inventory')
      .then(res => res.json())
      .then(data => {
        const newitemList = [];
        data.forEach(({_id, itemName, currentStock, idealStock}) => {
          newitemList.push(
            <Item id = {_id} itemName = {itemName} currentStock = {currentStock} idealStock = {idealStock}/>
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
          <tr>
            <th>Name</th>
            <th>Current Stock</th>
            <th>Ideal Stock</th>
            <th>Availability </th>
            <th>Edit</th>
          </tr>
          {this.state.itemList}
        </table>

        <Link to='/add'>
          <button>Add Item!</button>
        </Link>
      </div>
    );
  }
}

export default MainContainer;