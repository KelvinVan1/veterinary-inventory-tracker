import { useState } from 'react';
import { inventoryAddPageProps } from '../../../types/types';

function InventoryAdd(props: inventoryAddPageProps) {
  const {addItem, setAddItem, setUpdated} = props;

  const [inventoryName, setInventoryName] = useState('');
  const [idealStock, setIdealStock] = useState('0');
  const [category, setCategory] = useState('Default');

  async function addNewItem() {
    setAddItem(false);
    setUpdated(true);
    await fetch('/api/inventory', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({inventoryName, currentStock: 0, idealStock, category})
    });
  }

  return (
    <div>TEMP</div>
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