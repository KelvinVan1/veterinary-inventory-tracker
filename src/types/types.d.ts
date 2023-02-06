import { Request, Response, NextFunction } from 'express';

export type ResponseObject = (req: Request, res: Response, next: NextFunction) => void;

export interface InventoryController {
  getInventory: ResponseObject;
  createInventory: ResponseObject;
  updateInventory: ResponseObject;
  deleteInventory: ResponseObject;
}