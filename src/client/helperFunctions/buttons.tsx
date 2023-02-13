import React from 'react';
import { GridCellParams } from '@mui/x-data-grid/models/params';
import Button from '@mui/material/Button';

export function manageInventoryButton(event: React.MouseEvent, params: GridCellParams){
  event.preventDefault();
  const currentRow = params.row;
  alert(JSON.stringify(currentRow, null, 4));
}

export function editInventoryButton(event: React.MouseEvent, params: GridCellParams){
  event.preventDefault();
  const currentRow = params.row;
  alert(JSON.stringify(currentRow, null, 4));
}

export async function deleteInventoryButton(event: React.MouseEvent, params: GridCellParams){
  event.preventDefault();
  const currentRow = params.row;
  const deleteConfirmation = confirm(`Are you sure you want to delete ${currentRow.name}? \nThis is a irreversible change!`);
  if(deleteConfirmation){
    await fetch(`/api/inventory/${currentRow.id}`, {
      method: 'DELETE'
    });
  }
}

export function genButton(params: GridCellParams, buttonName: string, buttonType: {(event: React.MouseEvent, params: GridCellParams): void}){
  return (
    <Button size="small" sx={{textTransform: 'none'}} variant="contained" onClick={(event) => {buttonType(event, params);}}>
      {buttonName}
    </Button>
  );
}