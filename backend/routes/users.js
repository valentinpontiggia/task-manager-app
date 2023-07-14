const router = require('express').Router();
let User = require('../models/User');

// User registration route
router.route('/register').post((req, res) => {
    // Register a new user
});

// User login route
router.route('/login').post((req, res) => {
    // Log in an existing user
});

module.exports = router;
