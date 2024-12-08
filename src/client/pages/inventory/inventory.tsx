import { useEffect, useState, ReactElement } from 'react';
import {inventoryItem} from '../../../types/types';
import InventoryAdd from './addInventory';
import InventoryDetails from './inventoryDetails';
import InventoryType from '../../components/inventoryType';

function Inventory() {
  const [inventoryItems, setInventoryItems] = useState<ReactElement[]>([]);
  const [addItem, setAddItem] = useState(false);
  const [selectedItemID, setSelectedItemID] = useState('-1');

  // Handles determining if component should rerender
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    async function generateItems(){
      try {
        const request = await fetch('/api/inventory');
        const items = await request.json();
        const result: ReactElement[] = [];

        items.forEach((element: inventoryItem) => {
          const {_id, inventoryName, category, currentStock, idealStock } = element;
          result.push(
            <InventoryType
              key={crypto.randomUUID()}
              id={_id}
              setSelectedItemID={setSelectedItemID}
              name={inventoryName}
              currentStock={currentStock}
              idealStock={idealStock}
              category={category}/>);
        });
        setInventoryItems(result);
      } catch(err) {
        console.log('There was an error fetching items: ', err);
      }
    }

    if(update) {
      generateItems();
      setUpdate(false);
    }

  }, [update]);

  return (
    <section className="bg-gray-900 text-white">
      <div className="flex flex-col px-6 py-8 mx-auto h-screen overflow-x-auto">
        {/* Top Bar */}
        <div className='flex'>
          <img className="w-8 h-8 mt-2 mr-2" src="../api/assets/images/cat.png" alt="logo"/>
          <p className="mt-2 mb-6 text-2xl font-semibold">
            VetTrack Inventory
          </p>

          <button className='bg-sky-950 ml-auto mb-2 px-2 py-2 rounded-lg' onClick={() => setAddItem(true)}>
            + Add New Inventory Item
          </button>
        </div>

        {/* Add Inventory Popup */}
        {addItem ? (
          <InventoryAdd setModel={setAddItem} setUpdate={setUpdate}/>
        ) : null}

        {/*Selected Item Details Popup*/}
        { selectedItemID !== '-1' ? <InventoryDetails selectedID={selectedItemID} setSelectedID={setSelectedItemID}/> : null}

        {/* Metrics View */}
        <div>
        </div>

        {/* Item table */}
        <div className='overflow-x-auto rounded-lg border border-gray-700'>
          <table className='border-collapse bg-gray-800 w-full'>
            <thead>
              <tr className='bg-sky-950 border-b-2 border-gray-700'>
                <th className='text-left px-5'>Name</th>
                <th className='text-left px-5'>Category</th>
                <th className='text-left px-5'>Current Stock</th>
                <th className='text-left px-5'>Ideal Stock</th>
                <th className='text-center px-5'>Availability</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems}
            </tbody>
          </table>
        </div>

      </div>
    </section>
);
}

export default Inventory;
