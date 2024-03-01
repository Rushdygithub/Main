const {app,router} = require('./app')
const {log} = require('./Middleware/mid')
const errorHanler = require('./Middleware/errorHandler')


app.use('/new-route', router)
app.use(errorHanler)

router.get('/data/:key?', (req,res)=> {
    let key = req.params.key
    if (!key) res.send('Key: ' + 3)
     res.send('Key: ' + key)
})

router.get('/next', [log], (req,res)=> {
    console.log('done')
    res.send('Ok')
})


const newFun = (req,res,next) => {
    console.log('First Function')
    next()
}



const test = (req,res,next) => {
  console.log('Done')
  next()
}

app.use(test)
app.use(log)


const funTwo = (req,res,next) => {
    console.log('Fucntion Two')
    next()
}

const anotherFun = (req,res,next) => {
    console.log('Another Function')
    next()
    res.send('Finished The Task')
}

router.get('/all', [newFun,funTwo,anotherFun,test])
