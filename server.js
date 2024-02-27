const {app,router} = require('./app')


app.use('/new-route', router)

router.get('/data/:key?', (req,res)=> {
    let key = req.params.key
    if (!key) res.send('Key: ' + 3)
     res.send('Key: ' + key)
})

router.get('/next', (req,res,next)=> {
    console.log('done')
    next()
   
}, (req,res)=> {
    res.send('Ok')
})

const newFun = (req,res,next) => {
    console.log('First Function')
    next()
}

const funTwo = (req,res,next) => {
    console.log('Fucntion Two')
    next()
}

const anotherFun = (req,res,next) => {
    console.log('Another Function')
    // next()
    res.send('Finished The Task')
}

router.get('/all', [newFun,funTwo,anotherFun])
