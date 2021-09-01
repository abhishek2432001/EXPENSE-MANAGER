// require the todolist database(schema)
const Expenselist = require('../models/expense');

// action -- > for rendering Expense manager main page
module.exports.home =  function(req, res){
    Expenselist.find({}, function(err, expenses){
        if(err){
            console.log('Error in fetching expenses from db');
            return;
        }

        // return dynamic responses
        return res.render('home', {
            title: 'Expense Tracker',
            expense_list: expenses
        });
    });
}

// action --> for creating todo task and inserting in mongodb
module.exports.createExpense = function(req, res){

    // creating and adding task
    Expenselist.create({
        transaction: req.body.transaction,
        amount: req.body.amount,
        date: req.body.date
    }, function(err, newTask){
        if(err){
            console.log('error in creating a task!');
            return;
        }
        return res.redirect('back');
    });
}