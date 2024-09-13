import { useEffect, useState } from 'react';
import { inventoryItem, inventoryItemColumn } from '../../../types/types';
// import InventoryType from '../../components/inventoryType';




function Inventory() {
  const [inventoryItems, setInventoryItems] = useState<inventoryItemColumn[]>([]);
  const [addItem, setAddItem] = useState(false);

  useEffect(() => {generateItems();}, []);

  async function generateItems(){
    const request = await fetch('/api/inventory');
    const items = await request.json();
    // const result = [];

    // items.forEach(element => {
    //   const {category, currentStock, idealStock, inventoryItems, inventoryName, _id} = element;
    //   result.push(
    //     <InventoryType 
    //       category={category} 
    //       currentStock={currentStock} 
    //       idealStock={idealStock} 
    //       inventoryItems={inventoryItems} 
    //       inventoryName={inventoryName} 
    //       id={_id}>
    //     </InventoryType>);
    // });

    // setInventoryItems(result);
  }

  console.log(inventoryItems);
  return (
    <section className="bg-gray-900 text-white ">
      <div className="flex flex-col px-6 py-8 mx-auto h-screen overflow-x-auto">
        {/* Top Bar */}
        <div className='flex'>
          <img className="w-8 h-8 mt-2 mr-2" src="../api/assets/images/cat.png" alt="logo"/>
          <p className="mt-2 mb-6 text-2xl font-semibold">
          VetTrack Inventory
          </p>

          <button className='bg-sky-950 ml-auto mb-2 px-2 py-2 rounded-lg'>+ Add New Medication</button>
        </div>

        {/* Metrics View */}
        <div>
        </div>

        {/* Item table */}
        <table className='border bg-gray-800 border-gray-700 w-full rounded-lg border-separate border-spacing-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Current Stock</th>  
              <th>Ideal Stock</th>
              <th>Category</th>
              <th>Availability </th>
              <th>Manage Item</th>
              <th>Edit Details</th>
              <th>Delete Item</th> 
            </tr>
          </thead>
          <tbody>
            {/* {inventoryItems} */}
          </tbody>
        </table>
        
      </div>
    </section>
  );
}

export default Inventory;