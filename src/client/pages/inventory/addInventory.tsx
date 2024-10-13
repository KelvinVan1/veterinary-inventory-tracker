import { Dispatch, SetStateAction, useState } from 'react';
import { inventoryAddPageProps } from '../../../types/types';

function InventoryAdd(props: {model: boolean, setModel: Dispatch<SetStateAction<boolean>>}) {
//function InventoryAdd() {
  // const {addItem, setAddItem, setUpdated} = props;

  const [inventoryName, setInventoryName] = useState('');
  const [idealStock, setIdealStock] = useState('0');
  const [category, setCategory] = useState('Default');

  async function addNewItem() {
    await fetch('/api/inventory', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({inventoryName, currentStock: 0, idealStock, category})
    });
  }

  function closeModel() {
    props.setModel(!props.model);
  }

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0" >
        <div className="flex min-h-full justify-center items-center" onClick = {(e) => {if (e.target === e.currentTarget) closeModel();}}>
          <div className='border-sky-700 border rounded-md bg-slate-700 px-4 py-4'>
            <div>
              <h2 className='text-center text-2xl'>Add Inventory Item</h2>
              <p>Please fill out the fields to add a new inventory item</p>

              <form className='flex flex-col content-between pt-5'>
                  <label className='font-bold'>Inventory Name:</label>
                  <input className='rounded-sm text-black'/>
                  <label className='font-bold'>Inventory Type:</label>
                  <input className='rounded-sm text-black'/>                
                  <label className='font-bold'>Ideal Stock:</label>
                  <input className='rounded-sm text-black'/>
              </form>
            </div>
            
            <div className='pt-8 text-black'>
              <button className='bg-sky-600 mr-3 px-4 py-2 rounded-lg'>Save</button>
              <button className='bg-sky-600 ml-3 px-3 py-2 rounded-lg' onClick={() => closeModel()}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <Dialog open={addItem}>
    //   <DialogTitle>Add Item</DialogTitle>
    //   <DialogContent>
    //     <DialogContentText>
    //         Please fill out the fields below to add a new inventory item
    //     </DialogContentText>

  //     {/* Inventory Name */}
  //     <TextField
  //       autoFocus
  //       autoComplete='off'
  //       id="name"
  //       label="Inventory Name"
  //       type="text"
  //       fullWidth
  //       variant="standard"
  //       value={inventoryName}
  //       onChange={(event) => {setInventoryName(event.target.value);}}
  //     />

  //     {/* Ideal Stock */}
  //     <TextField
  //       autoFocus
  //       autoComplete='off'
  //       id="idealStock"
  //       label="Ideal Stock"
  //       type="number"
  //       error={isNaN(parseInt(idealStock, 10)) || parseInt(idealStock) < 0}
  //       helperText={(isNaN(parseInt(idealStock)) || parseInt(idealStock) < 0) ? 'Please enter a valid number' : ''}
  //       fullWidth
  //       variant="standard"
  //       value={idealStock}
  //       onChange={(event) => {
  //         setIdealStock(event.target.value);
  //       }}  
  //     />

  //     {/* Category */}
  //     <TextField
  //       autoFocus
  //       select
  //       id="category"
  //       label="Category (Optional)"
  //       type="text"
  //       fullWidth
  //       variant="standard"
  //       value={category}
  //       onChange={(event) => {setCategory(event.target.value);}}
  //     >
  //       <MenuItem value={'Default'}>Default</MenuItem>
  //       <MenuItem value={'Defaulty'}>Defaulty</MenuItem>
  //       <MenuItem value={'Defaultyy'}>Defaultyy</MenuItem>
  //     </TextField>

  //   </DialogContent>
  //   <DialogActions>
  //     <Button onClick={() => setAddItem(false)}>Cancel</Button>
  //     <Button onClick={() => addNewItem()}>Add Item</Button>
  //   </DialogActions>
  // </Dialog>
  );
}

export default InventoryAdd;
