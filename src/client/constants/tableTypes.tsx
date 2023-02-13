import { GridCellParams } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import { genButton, manageInventoryButton } from '../helperFunctions/buttons';

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', minWidth: 100, flex: 1},
  { field: 'currentStock', headerName: 'Current Stock', minWidth: 100, flex: 1},
  { field: 'idealStock', headerName: 'Ideal Stock', minWidth: 100, flex: 1},
  { field: 'category', headerName: 'Category', minWidth: 100, flex: 1},
  {
    field: 'manageItems',
    headerName: 'Manage Items',
    minWidth: 100,
    flex: 1,
    sortable: false,
    renderCell: (params: GridCellParams) => {return genButton(params, 'Manage Item', manageInventoryButton);},
  },
  {
    field: 'editDetails',
    headerName: 'Edit Details',
    minWidth: 100,
    flex: 1,
    sortable: false,
    renderCell: (params: GridCellParams) => {return genButton(params, 'Edit Details', manageInventoryButton);},
  },
  {
    field: 'delete',
    headerName: 'Delete',
    minWidth: 100,
    flex: 1,
    sortable: false,
    renderCell: (params: GridCellParams) => {return genButton(params, 'Delete', manageInventoryButton);},
  }
];