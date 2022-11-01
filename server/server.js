const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const Item = require('./models/itemModel');

const app = express();

//const apiRouter = require('./routes/api');

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
//app.use('/api', apiRouter);

//Base App handler
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/api', (req, res) => {
  console.log('API');
  Item.create({itemName: 'Doxycycline', currentStock: 2, idealStock: 1})
    .then(data => {
      return res.status(200).send({name: 'Kelvin'});
    })
    .catch(err => {
      return res.status(404).send(err);
    });
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