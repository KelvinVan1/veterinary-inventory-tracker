import { useEffect, useState } from 'react';
import { inventoryItem, inventoryItemColumn } from '../../../types/types';
import InventoryAdd from './addInventory';

import { DataGrid} from '@mui/x-data-grid';
import {columns} from '../../constants/tableTypes';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function Inventory() {
  const [inventoryItems, setInventoryItems] = useState<inventoryItemColumn[]>([]);
  const [addItem, setAddItem] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {generateItems()}, [])

  useEffect(() => {
    if(updated){
      console.log("Run")
      generateItems();
      setUpdated(false);
    }
  }, [updated]); 

  async function generateItems(){
    const items = await fetch('/api/inventory').then((data) => data.json());
    const result: inventoryItemColumn[] = [];

    items.forEach((elem: inventoryItem) => {
      const {_id, inventoryName, currentStock, idealStock, category} = elem;
      result.push({ id: _id, name: inventoryName, currentStock, idealStock, category});
    });
    setInventoryItems(result);
  }

  return (
    <Box className="Inventory" sx={{ height: 600, width: 1, padding: 4 }}>
      <h1>Veterinary Inventory Tracker</h1>
      <DataGrid
        rows={inventoryItems}
        columns={columns}
        checkboxSelection = {false}
        rowSelection = {false}
      />
      <Button onClick={() => {setAddItem(true)}} variant="outlined">Add Item</Button>
      {addItem && <InventoryAdd addItem={addItem} setAddItem={setAddItem} setUpdated={setUpdated}/>}
    </Box> 
  );
}

export default Inventory;