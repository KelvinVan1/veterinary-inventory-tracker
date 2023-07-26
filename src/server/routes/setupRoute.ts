import { Router } from 'express';
import { configData } from '../../types/types';
import { configLoader, databaseConnect, databaseVerifyConnection } from '../../helpers/setupHelpers';

const setupRouter = Router();

// Check config exists
setupRouter.get('/config', (req, res) => {
  try {
    configLoader();
    return res.status(200).json({status: 1});
  } catch {
    return res.status(200).json({status: 0});
  }
});

//Check DB connection status
setupRouter.get('/status', (req, res) => {
  
  const status = databaseVerifyConnection();
  res.status(200).json({status});
});

//load DB
setupRouter.get('/load', async (req, res) => {
  try{
    const config: configData = configLoader();
  
    //Establish connection for MongoDB
    if(config.MONGO_URI){
      databaseConnect(config.MONGO_URI);
      return res.sendStatus(200);
    }
  } catch {
    console.log('Unable to connect to DB');
    return res.sendStatus(500);
  }
});

export default setupRouter;