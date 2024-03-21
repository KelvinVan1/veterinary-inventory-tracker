import {readFileSync} from 'fs';
import {resolve} from 'path';
import {configData} from '../types/types';
import {Mongoose, connect} from 'mongoose';

let mongoose: Mongoose;

const configLoader = () => {
  try {
    const data: string = readFileSync(resolve(__dirname, '../config.json'), 'utf-8');
    const parsedData: configData = JSON.parse(data);

    return parsedData;
  }
  catch {
    throw new Error('Unable to read configuration possibly does not exist yet');
  }
};

const databaseConnect = (URI: string) : void => {
  const mongoURI: string = URI;


  connect(mongoURI, {
    dbName: 'Inventory',
  })
    .then((data) => {
      mongoose = data;
      console.log('Sucessfully connected to MongoDB.');
    })
    .catch(err => console.log(err));
};

const databaseVerifyConnection = () => {
  return mongoose.connection.readyState;
};

export {configLoader, databaseConnect, databaseVerifyConnection};