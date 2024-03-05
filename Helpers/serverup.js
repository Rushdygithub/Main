const express = require('express')
const app  = express()
const router = express.Router()
const bodyParser = require('body-parser')

app.use(bodyParser.json());

let SERVER_PORT = 5000;

app.listen(SERVER_PORT, (error)=> {
    $msg = ''; 
    $res = error ? $msg = `Something Went wrong ${error}` : $msg = `Server Is Runing on PORT ${SERVER_PORT}`;
    console.log($res)
});

module.exports = {
    router,
    app
}