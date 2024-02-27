const fs = require('fs').promises
const path = require('path')
const {format} = require('date-fns')
const {v4:uiid} = require('uuid')

const fileManager = async () => {
          
    try {

        let date = `${format(new Date(), "'Today is a' eeee")}, ${uiid()}`
        await fs.writeFile(path.join('new13.txt'), date)
        await fs.readFile(path.join('new13.txt'),'utf-8')
        await fs.appendFile(path.join('new8.txt'),date, 'utf-8')
        await fs.unlink(path.join('new13.txt'))
        
        
    } catch (error) {
        console.error(error)
    }
}

fileManager()

