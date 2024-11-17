import {useState} from 'react';
import {verifyNumerical} from '../../../helpers/uiHelpers';
import {inventoryAddProps} from '../../../types/types';

function InventoryAdd(props: inventoryAddProps) {

  const [inventoryName, setInventoryName] = useState('');
  const [idealStock, setIdealStock] = useState('0');
  const [category, setCategory] = useState('');

  const [invalidNum, setInvalidNum] = useState(false);
  const [invalidForm, setInvalidForm] = useState(false);

  async function addNewItem() {
    if(inventoryName === '' || category === '' || invalidNum) {
      setInvalidForm(true);
      return;
    }

    setInvalidForm(false);

    try{
      await fetch('/api/inventory', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({inventoryName, currentStock: 0, idealStock, category})
      });
      props.setUpdate(true);
    } catch (error) {
      console.log('An error has occurred while adding item: ' + error);
    }

    closeModel();

  }

  function closeModel() {
    props.setModel(!props.model);
  }

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0" >
        <div className="flex min-h-full justify-center items-center" 
          onClick = {(e: React.MouseEvent<HTMLDivElement>) => {if (e.target === e.currentTarget) closeModel();}}>
          <div className='border-sky-700 border rounded-md bg-slate-700 px-4 py-4'>
            <div>
              <h2 className='text-center text-2xl'>Add Inventory Item</h2>
              <p>Please fill out the fields to add a new inventory item</p>

              <form className='flex flex-col content-between pt-5'>
                <label htmlFor='name' className='font-bold'>Inventory Name:</label>
                <input id='name' onInput={
                  (e: React.FormEvent<HTMLInputElement>) => {
                    setInventoryName(e.currentTarget.value);
                  }
                }
                className='rounded-md text-black text-lg'/>

                <label htmlFor='category' className='font-bold'>Inventory Category:</label>
                <input id='category' onInput={
                  (e: React.FormEvent<HTMLInputElement>) => {
                    setCategory(e.currentTarget.value);
                  }
                }
                className='rounded-md text-black text-lg'/>

                <label htmlFor='stock' className='font-bold'>Ideal Stock:</label>
                <input id='stock' onInput={
                  (e: React.FormEvent<HTMLInputElement>) => {
                    setInvalidNum(verifyNumerical(e));
                    setIdealStock(e.currentTarget.value);
                  }
                }
                className='rounded-md text-black text-lg'/>
                {invalidNum ? (<p className='text-red-600 text-md'>Enter a valid number</p>) : null}
              </form>
            </div>
            
            <div className='pt-8 text-black'>
              <button onClick={() => addNewItem()} className='bg-sky-600 mr-3 px-4 py-2 rounded-lg'>Save</button>
              <button className='bg-sky-600 ml-3 px-3 py-2 rounded-lg' onClick={() => closeModel()}>Cancel</button>
              {invalidForm ? (<p className='text-red-600 text-md'>Please fill each field in the form.</p>) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryAdd;
