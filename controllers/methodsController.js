const {obj} = require('../data/obj')

const findFucntion = (req,res) => {

   let find = obj.find(e => e.id === 2)
    return res.json({
      status: true,
      message: 'Success',
      data: find.name
   })

}

const filterFunction = (req,res) => {
 
    let filter = obj.filter(e => e.subject === "Maths")

    return res.json({
        status: true,
        message: 'Success',
        data: filter
    })
    
}

module.exports = {
    findFucntion,
    filterFunction
}