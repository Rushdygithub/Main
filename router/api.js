const express = require('express')
const app  = express()
const router = express.Router()
const {createEmployee,getEmployee} = require('../controllers/firstController')
const bodyParser = require('body-parser')
const {v4:uuid}  = require('uuid')


app.use(bodyParser.json());


app.use('/web/rest-apis', router)

//only have req,res object in a route object
router.get('/datas', (req,res)=> {
    
    getEmployee(req,res,uuid())
})

router.post('/add/employee', (req,res)=> {
    
    // const {id,name,email} = req.body
    createEmployee(req,res,req.body)

   
})


let SERVER_PORT = 9000;

app.listen(SERVER_PORT, (error)=> {
    $msg = ''; 
    $res = error ? $msg = `Something Went wrong ${error}` : $msg = `Server Is Runing on PORT ${SERVER_PORT}`;
    console.log($res)
});


