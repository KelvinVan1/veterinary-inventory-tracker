import {readFileSync} from 'fs';
import {resolve} from 'path';
import {configData} from '../types/types';
import {connect, set} from 'mongoose';

const configLoader = () => {
  try {
    const data: string = readFileSync(resolve(__dirname, '../../config.json'), 'utf-8');
    const paresedData: configData = JSON.parse(data);

    return paresedData;
  }
  catch {
    throw new Error('Error occured while attempting to read configuration');
  }
};

const databaseConnect = (URI: string) : void => {
  const mongoURI: string = URI;

  set('strictQuery', false);
  connect(mongoURI, {
    dbName: 'Inventory',
  })
    .then(() => console.log('Sucessfully connected to MongoDB.'))
    .catch(err => console.log(err));
};

export {configLoader, databaseConnect};