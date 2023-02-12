import { GridColDef } from "@mui/x-data-grid/models/colDef";

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'currentStock', headerName: 'Current Stock', width: 150 },
  { field: 'idealStock', headerName: 'Ideal Stock', width: 150 },
  { field: 'category', headerName: 'Category', width: 150 },
  {
    field: 'actions',
    headerName: 'Action',
    width: 180,
    sortable: false,
    
    renderCell: (params) => {
        const onClick = (event: React.MouseEvent) => {
          event.preventDefault();
          const currentRow = params.row;
          return alert(JSON.stringify(currentRow, null, 4));
        };
        
        return (
          <div>
            <button onClick={onClick}>Edit</button>
            <button onClick={onClick}>Delete</button>
          </div>
        );
    },
  }
];