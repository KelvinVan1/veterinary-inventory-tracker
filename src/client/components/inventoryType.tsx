import { useEffect, useState } from 'react';
import {inventoryItemColumn} from '../../types/types';

function InventoryType(props: inventoryItemColumn) {
  const [availability, setAvailability] = useState(0);
  const [availabilityColor, setAvailabilityColor] = useState('bg-red-900');

  useEffect(() => {
    const calculation = props.currentStock / props.idealStock * 100 | 0;

    if (calculation > 0) {
      setAvailability(calculation);
    }
  }, [props.currentStock, props.idealStock]);

  useEffect(() => {
    if(availability < 50) setAvailabilityColor('bg-red-900');
    else if (availability < 80) setAvailabilityColor('bg-yellow-900');
    else setAvailabilityColor('bg-green-900');
  }, [availability]);

  return (
    <tr className='hover:bg-sky-950 text-lg'>
      <td className='px-5'>{props.name}</td>
      <td className='px-5'>{props.category}</td>
      <td className='px-5'>{props.currentStock}</td>
      <td className='px-5'>{props.idealStock}</td>
      <td className='px-5'>
        <div className='relative w-full h-4 rounded-full bg-blue-900'>
          <div className={`${availabilityColor} rounded-full h-4`} style={{'width': `${availability}%`}}/>
          <span className='absolute inset-0 flex items-center justify-center text-white font-semibold text-sm'>{availability}%</span>
        </div>
      </td>
    </tr>
  );
}

export default InventoryType;
