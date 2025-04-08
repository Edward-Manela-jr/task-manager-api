const expres = require ('express');
const router = expres.Router();
const login = require('../models/login');

router.get('/manela', (req, res) => {
    res.send('API is running EDWARD...');
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