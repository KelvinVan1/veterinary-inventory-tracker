import { useEffect, useState } from 'react'
import { DataGrid} from '@mui/x-data-grid';
import {columns} from '../constants/tableTypes'
import { inventoryItem } from '../../types/types';

function Inventory() {
  const [inventoryItems, setInventoryItems] = useState<inventoryItem[]>([])

  async function generateItems(){
    const items = await fetch('/api/inventory').then((data) => data.json());
    const result: inventoryItem[] = [];

    items.forEach((elem: any) => {
      const {_id, inventoryName, currentStock, idealStock, category} = elem
      result.push({ id: _id, name: inventoryName, currentStock, idealStock, category})
    })
    setInventoryItems(result)
  }

  useEffect(() => {
    generateItems();
  }, [inventoryItems.length])

  return (
    <div className="Inventory" style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={inventoryItems}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div> 
  )
}

export default Inventory