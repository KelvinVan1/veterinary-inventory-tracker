import express, { NextFunction, Request, Response } from 'express';
import inventoryRouter from './routes/inventoryRoute';
import itemRouter from './routes/itemRoute';
import {configLoader, databaseConnect} from '../helpers/setupHelpers';
import { configData } from '../types/types';


//Grab configuration data
const config: configData = configLoader();

//Establish connection for MongoDB
if(config.MONGO_URI){
  databaseConnect(config.MONGO_URI);
}

//Express
const app = express();
const PORT = 5050;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/inventory', inventoryRouter);
app.use('/api/item', itemRouter);

// Catch for invalid request
app.use('/*', (req: Request, res: Response) => {
  return res.status(404).send('Invalid Page');
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