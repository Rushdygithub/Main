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

router.get('/item-retrive', (req,res)=> {

    try {
        const sql = "SELECT * FROM items_table";
        con.query(sql, (error, result)=> { 
            if (error) throw error;
            console.log(result);
            return res.json({
                status: true,
                code: 200,
                data: result
            }); 
            
        });

    } catch (error) {
        return res.json({
            status: false,
            code: 500,
            data: error
        }); 
    }
});

router.put('/edit/item/:id', (req,res)=> {
    
    try {

        // const ids =  req.params.id; (It takes as a string value need to pass as a integer)
        const ids =  parseInt(req.params.id);
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

            const sql1 = "SELECT item_id FROM items_table";
            con.query(sql1, (error, results) => {
             
              if (error) throw error;
              
                const itemIds = results.map(result => result.item_id); 
                console.log(itemIds.includes(ids));

              //Here - when includes function check something in a code it strickly consider about the datatype as well
            if (!itemIds.includes(ids))
            {
                return res.json({
                    status: false,
                    code: 400,
                    data: `${ids} Is Not Found`
                }); 
            }
            else {

            const sql = "UPDATE items_table SET name = ?, price = ?, availability = ?, quantity = ? WHERE item_id = ?";
            con.query(sql,[item_name,item_price,item_availability,item_quantity,ids], (error,result)=> {
            if (error) throw error; 

            });
                console.log('Ok');
                
                return res.json({
                    status: true,
                    code: 200,
                    data: `${ids} Is Updated Succesfully`
                }); 
              }
    
            });

        
    } catch (error) {
        return res.json({
            status: false,
            code: 500,
            data: error
        }); 
    }
});


router.get('/test/:id', (req,res)=> {

    const id = req.params.id;
    const sql1 = "SELECT item_id FROM items_table";

    con.query(sql1, [], (error, results) => {
      if (error) {
        throw error;
      }
    
      if (results[0].item_id == id) {
        console.log('Ok');
        return res.json({
            status: true,
            code: 200,
            data: `Done`
        }); 
      }
      else {
        console.log('NotOk');
        return res.json({
            status: true,
            code: 200,
            data: `${id} Not Found`
        }); 
      }
      console.log(results);
    
    });
});

router.delete('/remove/item/:id', (req,res)=> {
    
    try {

        const id  = req.params.id;
        const sql = "DELETE FROM items_table WHERE item_id = ?";

        con.query(sql,[id], (error,result)=> {
           if (error) throw error;
           return res.json({
            status: false,
            code: 500,
            data: `${id} Is Deleted Successfully` 
           }); 
        });
        
        
    } catch (error) {
        return res.json({
            status: false,
            code: 500,
            data: error
        }); 
    }

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