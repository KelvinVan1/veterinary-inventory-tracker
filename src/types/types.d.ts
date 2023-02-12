import { Request, Response, NextFunction } from 'express';

//Backend
export type ResponseObject = (req: Request, res: Response, next: NextFunction) => void;

export interface InventoryController {
  getInventory: ResponseObject;
  createInventory: ResponseObject;
  updateInventory: ResponseObject;
  deleteInventory: ResponseObject;
}

export interface ItemController {
  getItems: ResponseObject;
  getItem: ResponseObject;
  createItem: ResponseObject;
  updateItem: ResponseObject;
  deleteItem: ResponseObject;
  calculateItem: ResponseObject;
}

//Frontend
export type inventoryItem = {id: string, name: string, currentStock: number, idealStock: number, category: string}