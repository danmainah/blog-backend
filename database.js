const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://blog:<connection-string>.mongodb.net/Blog', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log('Connected to the database succesifully');
});

module.exports = db;
