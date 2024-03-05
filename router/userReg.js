const express = require('express')
const app  = express()
const router = express.Router()
const {userRegistration} = require('../controllers/userRegistration')
const bodyParser = require('body-parser')

app.use(bodyParser.json());


app.use('/user/registration', router)

router.post('/user', async (req,res,err)=> {
    try {
       
       await userRegistration(req,res,req.body)
        
    } catch ($err) {
        return res.json(msgBox = `Internal Server Error ${$err.message}`)
     }
   
})

let SERVER_PORT = 5000;

app.listen(SERVER_PORT, (error)=> {
    $msg = ''; 
    $res = error ? $msg = `Something Went wrong ${error}` : $msg = `Server Is Runing on PORT ${SERVER_PORT}`;
    console.log($res)
});

