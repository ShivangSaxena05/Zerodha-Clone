const express = require('express')
const Signup = require('../controllers/Signup');
const Login = require('../controllers/login');
// const Ai = require('../Controller/Ai');



const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hello');
});

router.post('/signup',Signup)
// router.post('/ai/ans',Ai);
router.post('/login', Login);
module.exports = router;


