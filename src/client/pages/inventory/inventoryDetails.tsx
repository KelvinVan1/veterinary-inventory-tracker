import {inventoryDetailsProps} from '../../../types/types';
import React from 'react';

function InventoryDetails(props: inventoryDetailsProps) {

  function closeModel() {
    props.setSelectedID('-1');
  }

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0">
        <div className="absolute inset-0"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            if (e.target === e.currentTarget) closeModel();
          }}>
          <div className='bg-slate-700 border-sky-700 h-full w-1/2 px-4 py-4 transform translate-x-[100vw] animate-slideRightLeft'>
            <div>{props.selectedID}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryDetails;