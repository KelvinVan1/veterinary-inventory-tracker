import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function EditItem () {

  const { id } = useParams();
  const data = useLocation().state;

  const [name, setName] = useState(data.itemName);
  const [currentStock, setCurrentStock] = useState(data.currentStock);
  const [idealStock, setIdealStock] = useState(data.idealStock);

  function saveItem(){
    const body = {
      id,
      itemName: name,
      currentStock,
      idealStock,
    };

    console.log('Body: ', JSON.stringify(body));

    fetch('/api/inventory', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="edit-item">
      <h3>Edit Item:</h3>
      <div className="editItemField">
        <label htmlFor="name">Item: </label>
        <input name="name" placeholder="Doxycycline" value={name} onChange={input => setName(input.target.value)}/>
      </div>

      <div className="editItemField">
        <label htmlFor="currentStock">Current Stock: </label>
        <input name="currentStock" placeholder="0" value={currentStock} onChange={input => setCurrentStock(input.target.value)}/>
      </div>

      <div className="editItemField">
        <label htmlFor="idealStock">Ideal Stock: </label>
        <input name="idealStock" placeholder="1" value={idealStock} onChange={input => setIdealStock(input.target.value)}/>
      </div>
      <Link to='/'>
        <button onClick={saveItem}>Submit</button>
      </Link>

      <Link to='/'>
        <button>Cancel</button>
      </Link>
    </div>
  );
}


// class EditItem extends Component {
//   constructor(props){
//     super(props);

//     //const location = useLocation();
//     console.log('Props: ', this.props.id);

//     this.state = {
//       itemName: '',
//       currentStock: 0,
//       idealStock: 0
//     };

//     this.saveItem = this.saveItem.bind(this);
//     this.updateState = this.updateState.bind(this);
//   }

//   saveItem(){
//     const body = Object.assign(this.state);

//     fetch('/api/inventory', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body),
//     })
//       .then(res => res.json())
//       .then(data => console.log(data))
//       .catch((err) => {
//         console.log(err);
//       });

//   }

//   updateState(input){
//     console.log(this.props.id);
//     const type = input.target.name;
//     const newState = Object.assign(this.state);

//     /* eslint-disable indent */
//     switch(type){
//       case 'name':
//         newState.itemName = input.target.value;
//         break;
//       case 'currentStock':
//         newState.currentStock = input.target.value;
//         break;

//       case 'idealStock':
//         newState.idealStock = input.target.value;
//         break;
        
//       default:
//         break;
//     }
//     /* eslint-enable indent */
//   }

//   render() {
//     return (
//       <div className="edit-item">
//         <h3>Edit Item:</h3>
//         <div className="editItemField">
//           <label htmlFor="name">Item: </label>
//           <input name="name" placeholder="Doxycycline" onChange={this.updateState}/>
//         </div>

//         <div className="editItemField">
//           <label htmlFor="currentStock">Current Stock: </label>
//           <input name="currentStock" placeholder="0" onChange={this.updateState}/>
//         </div>

//         <div className="editItemField">
//           <label htmlFor="idealStock">Ideal Stock: </label>
//           <input name="idealStock" placeholder="1" onChange={this.updateState}/>
//         </div>
        
//         <Link to='/'>
//           <button onClick={this.saveItem}>Submit</button>
//         </Link>

//         <Link to='/'>
//           <button>Cancel</button>
//         </Link>

//       </div>
//     );
//   }
// }

export default EditItem;