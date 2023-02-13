import React from 'react';
import { GridCellParams } from '@mui/x-data-grid/models/params';

export function manageInventoryButton(event: React.MouseEvent, params: GridCellParams){
  event.preventDefault();
  const currentRow = params.row;
  alert(JSON.stringify(currentRow, null, 4));
}

export function genButton(params: GridCellParams, buttonName: string, buttonType: {(event: React.MouseEvent, params: GridCellParams): void}){
  return (
    <button onClick={(event) => {buttonType(event, params);}}>
      {buttonName}
    </button>
  );
}