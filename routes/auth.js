const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController');

// Login endpoint
router.post('/login', loginUser);

router.get('/login', (req, res) => {
    res.send('login page...');
});


module.exports = router;