
const data = {
    employees: require('../data/data.json'),
    setEmployees: function (data) { this.employees = data }
}

const getEmployee = (req,res,id) => {

    return res.status(200).json({
        status: true,
        message: 'Ok',
        id: `${id} Is Genarated Succesfully`,
        data: data,
    })

}

const createEmployee = (req,res,body) => {
    
    // let length = data.employees.length
    // console.log(length)

    
    let newEmployee = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,

    }
    data.setEmployees([...data.employees, newEmployee]);
    res.status(201).json(data.employees);

    // return res.json({
    //     status: true,
    //     message: 'Ok'
    // })

}


module.exports = {
    getEmployee,
    createEmployee
}
