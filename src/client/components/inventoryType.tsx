import { useEffect, useState } from 'react';
import {inventoryItemColumn} from '../../types/types';

function InventoryType(props: inventoryItemColumn) {
  useEffect(() => console.log("Hello"), []);

  return (
    <tr className='hover:bg-sky-950 text-lg'>
      <td className='px-5'>{props.name}</td>
      <td className='px-5'>{props.category}</td>
      <td className='px-5'>{props.currentStock}</td>
      <td className='px-5'>{props.idealStock}</td>
      <td className='px-5'>Low Stock</td>
    </tr>
  );
}

export default InventoryType;
