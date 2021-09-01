// fetching existing instance of express
const express = require('express');
// create router object
const router = express.Router();

console.log('Router loaded . . . .');

// fetching controllers
const homeController = require('../controllers/home_controllers.js');

// routing to homepage controller
router.get('/',homeController.home);
// routing to create expense controller
router.post('/create-expense', homeController.createExpense);
// routing to delete expense controller
router.get('/delete-expense', homeController.deleteExpense);



// exporting router object
module.exports = router;