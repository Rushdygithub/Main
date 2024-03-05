const {router,app} = require('../Helpers/serverup')
const {findFucntion,filterFunction} = require('../controllers/methodsController')

app.use('/test-methods', router)

router.get('/find', (req,res)=>{
    findFucntion(req,res)
})

router.get('/filter', (req,res)=>{
    filterFunction(req,res)
})