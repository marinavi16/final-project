const bcryptjs = require('bcryptjs')
const UserController = require('../DL/UserController')
const { emailValidation } = require('./GeneralLogic')
require('./GeneralLogic')

async function readUser(filter={},projection){
    return await UserController.readUser(filter, projection)
}

async function register(data){
    emailValidation(data.email)
    data.password = bcryptjs.hashSync(data.password)
    return UserController.createUser(data)
    
}

async function updateUser(data){
    data.lastSeen = Date.now()
    
    return UserController.updateUser(data._id, data)
    
}
async function login(username,password){
    console.log(username)
    const user = (await UserController.readUser({username},'+password'))[0]
    
    if(!user) 
        throw 'email or password invalid'
    
    if(!bcryptjs.compareSync(password, user.password))
        throw 'email or password invalid'

    return updateUser(user)
 
}

module.exports = { ...UserController, readUser, updateUser, register, login }


// if (!data.firstName || !data.lastName)
//     throw 'first and last name are required!'
// data.name = `${data.firstName} ${data.lastName}`

// async function createUser(data){
//     if (!data.email?.includes('@'))
//         throw 'The email should include @'
//     return UserController.create(data)
    
// }