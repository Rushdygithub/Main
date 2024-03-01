const fs = require('fs').promises
const path = require('path')

const logEvent = async (url,method) => {
     
    try {
       let data = `URL Is: ${url} And Method Is ${method}`
       await fs.appendFile(path.join('modules','new9.txt'), `${data}'\n`);
    } catch (error) {
       console.log(`Something Went Wrong ${error}`)
    }

}

//custom middleware
const log = (req,res,next) => {
    logEvent(req.url,req.method)
    next()
}

module.exports = {
    log
}
