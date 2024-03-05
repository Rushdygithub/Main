const userData = {
    data: require('../data/user.json'),
    setUser: function (newUser) {this.data = newUser}
}

const fsPromise = require('fs').promises
const path      = require('path')
const bcrypt    = require('bcrypt')
const { error } = require('console')

const userRegistration = async (req,res,userDetails) => {
    const {user,password} = userDetails 
    let msgBox = ''
    if (!user || !password) {return res.json(msgBox== 'user and password is required') }

    let check = userData.data.find((person)=> person.user === user)
    if (check)
    {
        return res.json(msgBox== 'user is duplicated')
    }
    try {

        let saltRound = 10
        //hash is a algorithms
        let hashed = await bcrypt.hash(password, saltRound)
        let obj = {
            "user" : user,
            "password": hashed
        }

        userData.setUser([...userData.data, obj])
        await fsPromise.appendFile(path.join(__dirname, '..', 'data', 'data.json'), JSON.stringify(userData.data))
        console.log(userData.data)
        return res.json(msgBox = 'New User Is Created')
        

    } catch ($err) {
       return res.json(msgBox = `Internal Server Error ${$err.message}`)
    }
}

module.exports = {
    userRegistration
}