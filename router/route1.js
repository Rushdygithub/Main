const express = require('express')
const app     = express()
const router = express.Router()
const data    = require('../data/data.json')
const bodyParser = require('body-parser')
const fs = require('fs').promises;
const path = require('path');

app.use('/rest', router)

router.use(bodyParser.json());
//why and why use diffrently?

router.route('/web') 
        .get(async (req,res)=> {
            try {
                return res.status(200).json({
                    status: true,
                    message: 'Ok',
                    data: data
                })
            } catch ($err) 
            {
                console.log(`Something went wrong`, $err)
            }  
        })
        .post( async (req,res)=> {
           try {

                const {id,name,email} = req.body
                console.log(req.body) //it takes normal json object
                console.log(JSON.stringify(req.body)) //it takes normal json object to json string
                
                
                // console.log(await fs.readFile(path.join('data.json'), 'utf-8' ))
                console.log(await fs.appendFile(path.join('../data/data.json'), JSON.stringify(req.body,null,2)))


                res.status(201).json({
                    status: true,
                    message: 'Data added successfully',
                    data: data
                });
              
            
            } catch ($err) 
            {
                console.log(`Something went wrong`, $err)
            }    
        })
        .put((req,res)=> {
                try {
                   let id = req.body.id
                   return res.status(200).json({
                      status: true,
                      message: "Ok",
                      data: id + " Id Is Updated Succesfully"
                   })
                } catch ($err) 
                {
                    console.log(`Something went wrong`, $err)
                }
        })
        .delete((req,res)=> {
                try {
                    let id = req.body.id
                    return res.status(200).json({
                        status: true,
                        message: "Ok",
                        data: `${id} Is Is Deleted Succesfully`
                    })

                } catch ($err) 
                {
                    console.log(`Something went wrong`, $err)
                }              
        })

    

let SERVER_PORT = 8000;

app.listen(SERVER_PORT, (error)=> {
    $msg = ''; 
    $res = error ? $msg = `Something Went wrong ${error}` : $msg = `Server Is Runing on PORT ${SERVER_PORT}`;
    console.log($res)
});