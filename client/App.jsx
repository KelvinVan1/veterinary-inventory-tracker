import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import InventoryItems from './containers/InventoryItemsContainer.jsx';
import AddInventory from './containers/AddInventoryContainer.jsx';
import AddItem from './containers/AddItemContainer.jsx';
import EditItem from './containers/EditItemContainer.jsx';
import EditInventory from './containers/EditInventoryContainer.jsx';
import DeleteItem from './containers/deleteContainer.jsx';
import CalculateUsage from './containers/UsageContainer.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div className= 'app'>
          <h1 className='title'>Veterinary Inventory System</h1>

          <Routes>
            <Route exact path='/' element={<MainContainer/>}/>
            <Route path='/inventory/:id' element={<InventoryItems/>}/>
            <Route path='/add/item/:id' element={<AddItem/>}/>
            <Route path='/add/inventory' element={<AddInventory/>}/>
            <Route path='/edit/item/:id' element={<EditItem/>}/>
            <Route path='/edit/inventory/:id' element={<EditInventory/>}/>
            <Route path='/delete/:id' element={<DeleteItem/>}/>
            <Route path='/calculate/:id' element={<CalculateUsage/>}/>
          </Routes>

        </div>
      </Router>
    );
  }
}

export default App;