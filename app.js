const express = require('express')
const mysql = require('mysql')
const app     = express()
const dotenv  = require('dotenv')
dotenv.config()
const router = express.Router()
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.use('/web', router);

const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME
});

router.post('/item', (req,res)=> {

    try {
    const item_name = req.body.item_name;
    const item_price = req.body.item_price;
    const item_availability = req.body.item_availability;
    const item_quantity = req.body.item_quantity;

    let msg = '';
    if (!item_name) 
    {
        return res.json(msg = 'item name is required');
    }
    if (!item_price)
    {
        return res.json(msg = 'item price is required');
    }
    if (!item_availability)
    {
        return res.json(msg = 'item availability is required');
    }
    if (typeof item_availability !== 'boolean')
    {
        return res.json(msg = 'It is not a boolean value');
    }
    if (!item_quantity)
    {
        return res.json(msg = 'item_quantity is required');
    }
    
    const  sql = "INSERT INTO items_table (name, price, availability,quantity) VALUES (?,?,?,?)";
    con.query(sql,[item_name,item_price,item_availability,item_quantity],  (error, result) =>  {

        return res.json({
            status: true,
            code: 200,
            data: msg = '1 record inserted'
        });
    });
    } catch (error) {
        return res.json({
            status: false,
            code: 500,
            data: error.message
        });
    }
});

router.get('/item', (req,res)=> {
    

});

app.listen(process.env.SERVER_PORT, (error)=> {
    $msg = ''; 
    $res = error ? $msg = `Something Went wrong ${error}` : $msg = `Server Is Runing on PORT ${process.env.SERVER_PORT}`;
});

con.connect((error)=> {
    $msg = ''; 
    $res = error ? $msg = `Something Went wrong ${error}` : $msg = `Database Connected Successfully`;
    console.log($res);
});