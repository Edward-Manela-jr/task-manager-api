const expres = require ('express');
const router = expres.Router();
const login = require('../models/login');

router.get('/manela', (req, res) => {
    res.send('API is running EDWARD...');
});


//newly added code for login page testig using postman
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Temporary response for testing
    if (email === 'test@example.com' && password === 'password123') {
        return res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});



router.post('/login', (req, res) => {
    // res.send('API is running222222...');
    console.log(req.body);
    const {name, email, password} = req.body;

    const userData = new login({
        name: name,
        email: email,
        password: password

    });

    userData.save().then(() => {
        // res.json('Data inserted', userData);
        console.log('Data inserted', userData);
    }).catch((error) => {
       console.log(error.message);
    });


}); 

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const login = require('../models/login');
// const bcrypt = require('bcrypt');

// // Test route
// router.get('/manela', (req, res) => {
//     res.send('API is running EDWARD...');
// });

// // Registration endpoint
// router.post('/register', async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         // Check if the user already exists
//         const existingUser = await login.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create a new user
//         const newUser = new login({
//             name,
//             email,
//             password: hashedPassword,
//         });

//         // Save the user to the database
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully', user: newUser });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// });

// module.exports = router;