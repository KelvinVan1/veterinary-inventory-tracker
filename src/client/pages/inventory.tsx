import React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import {columns} from '../constants/tableTypes';
import { inventoryItem, inventoryItemColumn } from '../../types/types';
import Button from '@mui/material/Button';

function Inventory() {
  const [inventoryItems, setInventoryItems] = useState<inventoryItemColumn[]>([]);

  async function generateItems(){
    const items = await fetch('/api/inventory').then((data) => data.json());
    const result: inventoryItemColumn[] = [];

    items.forEach((elem: inventoryItem) => {
      const {_id, inventoryName, currentStock, idealStock, category} = elem;
      result.push({ id: _id, name: inventoryName, currentStock, idealStock, category});
    });
    setInventoryItems(result);
  }

  useEffect(() => {
    generateItems();
  }, [inventoryItems.length]);

  return (
    <div className="Inventory" style={{ height: 600, width: '100%' }}>
      <h1>Veterinary Inventory Tracker</h1>
      <DataGrid
        rows={inventoryItems}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Button variant="outlined">Add Item</Button>
    </div> 
  );
}

export default Inventory;