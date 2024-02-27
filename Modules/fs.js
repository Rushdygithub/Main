const fs = require('fs');
const path = require('path');
const {v4:id}  = require('uuid')

const fileFunction = () => {
    let data = 'Dummy Data';
    fs.writeFile(path.join('new1.txt'), data, (err) => {
        if (err) throw err;
        console.log('File Created Successfully');
          fs.readFile(path.join('new1.txt'), 'utf-8', (err,data)=> {
              if (err) throw err
              console.log(data)
              let dummy = id();
              fs.appendFile(path.join('new1.txt'), dummy, (err)=> {
                  if (err) throw err
                  console.log('Apended The Content')
                  if (fs.existsSync('new.txt')) {
                    
                      fs.unlink('new.txt', (err)=> {
                          if (err) throw err
                          console.log('Unlink The File')
                      })

                  }
              })
          })
    });
};

fileFunction();
