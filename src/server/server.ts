import express, { NextFunction, Request, Response } from 'express';
import {connect, set} from 'mongoose'
import inventoryRouter from './routes/inventoryRoute'

import * as dotenv from 'dotenv'
dotenv.config()

//Establish connection for MongoDB
if(process.env.MONGO_URI){
  const mongoURI: string = process.env.MONGO_URI

  set('strictQuery', false);
  connect(mongoURI, {
    dbName: 'Inventory',
  })
    .then(() => console.log('Sucessfully connected to MongoDB.'))
    .catch(err => console.log(err));
}

//Express
const app = express()
const PORT = 5050;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/inventory', inventoryRouter);

// Catch for invalid request
app.use('/*', (req: Request, res: Response) => {
  return res.status(404).send("Invalid Page");
});

// Global error catching
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  const defaultErr = {
    log: `GLOBAL ERROR HANDLER: caught unknown middleware error${err.toString()}`,
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  if (errorObj.log) console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

//Spin up backend on port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

export default app;