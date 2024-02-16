const express = require('express');
const app     = express();
const dotenv  = require('dotenv')
dotenv.config();



app.listen(process.env.SERVER_PORT, (error)=> {
    $msg = ''; 
    $res = error ? $msg = 'Something Went wrong' : $msg = `Server Is Runing on PORT ${process.env.SERVER_PORT}`;
    console.log($res);
});
