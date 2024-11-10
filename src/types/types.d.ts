import { Request, Response, NextFunction } from 'express';
import {Dispatch, SetStateAction} from 'react';

//Configuration
export type configData = {MONGO_URI: string};

//Backend
export type ResponseObject = (req: Request, res: Response, next: NextFunction) => void;

export interface accountResponse {
  login: ResponseObject;
}

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

//Frontend Props
export type inventoryItem = {_id: string, inventoryName: string, currentStock: number, idealStock: number, category: string}
export type inventoryItemColumn = {id: string, name: string, currentStock: number, idealStock: number, category: string}

export type inventoryAddProps = {model: boolean, setModel: Dispatch<SetStateAction<boolean>>}
