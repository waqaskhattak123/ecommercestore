const express = require('express');
const router = express.Router();

//import controllers 
const { registerUser } = require('../controllers/user');

//ALL ROUTES 
router.route('/createuser').post(registerUser);

module.exports = router;