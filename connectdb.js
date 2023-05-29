const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://danielmainawaweru:$Q-!wX4J.jrh67X@cluster0.6tofk63.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log('Connected to the database succesifully');
});

module.exports = db;