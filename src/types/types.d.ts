import { Request, Response, NextFunction } from 'express';
import React from 'react';
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
export type inventoryItem = {_id: string, inventoryName: string, currentStock: number, idealStock: number, category: string}
export type inventoryItemColumn = {id: string, name: string, currentStock: number, idealStock: number, category: string}

//Page Props
export type inventoryAddPageProps = {addItem: boolean, setAddItem: React.Dispatch<React.SetStateAction>, setUpdated: React.Dispatch<React.SetStateAction>}