//require mongoose library
const mongoose = require('mongoose');

//set-up the schema
const expenselistSchema = new mongoose.Schema({
    transaction: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    date: {
        type: String,
    }
});

// naming the database
const Expenselist = mongoose.model('Expenselist', expenselistSchema);  

// exporting the database
module.exports = Expenselist;
