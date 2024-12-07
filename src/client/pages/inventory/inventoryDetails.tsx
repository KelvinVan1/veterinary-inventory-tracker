import {useEffect, useState} from 'react';
import {inventoryDetailsProps} from '../../../types/types';

function InventoryDetails(props: inventoryDetailsProps) {

  return (<div>{props.selectedID}</div>);
}

export default InventoryDetails;