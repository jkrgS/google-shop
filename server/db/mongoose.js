//Import the mongoose module
const mongoose = require('mongoose');

mongoose.connection.close();
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/products';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//Get the default connection
const db = mongoose.connection;

db.on('open', () => console.log('Database has been connected'));
//Bind connection to error event (to get notification of connection errors)
db.on('error', () => {
  console.error.bind(console, 'MongoDB connection error:');
  db.close();
});
