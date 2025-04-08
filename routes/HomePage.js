const expres = require ('express');
const router = expres.Router();
const login = require('../models/login');

router.get('/', (req, res) => {
    res.send('API is running on HP...');
});

router.post('/login', (req, res) => {
    // res.send('API is running...');
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


// code below is for getting the data from the database
router.get("/getUsers", async (req, res) => {
    // code below is pulling all the data from the database
    const viewUsers = await login.find()
    res.json(viewUsers)
    // console.log(viewUsers)
})

module.exports = router;