const errorHanler = (error,req,res,next) => {

    console.error(error.stack)
    res.status(500).send('Something broke!' + error.message)

}

module.exports = errorHanler