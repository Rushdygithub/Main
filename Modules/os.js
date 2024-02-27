const os = require('os') //This return a object with lot of properties

const data = {
    freemem : os.freemem(),
    totalmem: os.totalmem(),
    archi   : os.arch(),
    all     : [
        os.homedir(),os.hostname(),os.type(),os.version(),os.userInfo(),os.uptime()
    ]
}

console.log('OS Info ' + data.all)