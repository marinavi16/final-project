const UserModel = require('./UserModel')

require('../../db')

async function createUser(data){
    return await UserModel.create(data)
}
async function readUser(filter={},projection){
    return await UserModel.find(filter, projection)
}
async function updateUser(_id,data){

    return await UserModel.findByIdAndUpdate(
        _id,data,
        {new: true, runValidators: true}
    )
}
module.exports = {createUser, readUser, updateUser}