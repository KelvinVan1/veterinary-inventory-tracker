const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();

const inventoryRouter = require('./routes/inventoryRoute.js');

const PORT = 3000;

//Mongoose Setup

//Grabs mongoURI from Atlas connect
try {
  const mongoURI = fs.readFileSync(path.resolve(__dirname, '../DatabasePass.txt'), 'utf-8');
  //Connect to database at mongoURI
  mongoose.connect(mongoURI)
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((err) => {
      console.log('Failed to connect to server: ', err);
    });
}
catch {
  console.log('Missing DatabasePass.txt file may not be created or path is incorrect');
}

//Handle parsing the request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route Handlers
app.use('/api/inventory', inventoryRouter);

//Base App handler
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

//Catch-all route handler
app.use('*', (req, res) => {
  res.sendStatus(404);
});

//Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;