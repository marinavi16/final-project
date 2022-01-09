const ExerLogic = require('./ExerciseLogic')
const UserController = require('../DL/UserController')

async function getExec(_id){
    const exer = await ExerLogic.readSingle(_id)
    const user = await UserController.readUser ({_id:exer[0].creator_id})                      //({_id:'61d95d0188fd3022e9bbb229'})
    //const user = await UserLogic.readUser('61d95d0188fd3022e9bbb229')           //({_id:exer[0].creator_id})
    return { 
        exercise: exer,
        user: user
    }
}

function emailValidation(email){
        if (!email?.includes('@'))
            throw 'The email should include @'
        return email 
}
        
module.exports = { emailValidation, getExec }


// if (!data.firstName || !data.lastName)
//     throw 'first and last name are required!'
// data.name = `${data.firstName} ${data.lastName}`

// async function createUser(data){
//     if (!data.email?.includes('@'))
//         throw 'The email should include @'
//     return UserController.create(data)
    
// }