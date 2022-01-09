const execModel = require('./ExerciseModel')

require('../../db')

async function create(data){
    return await execModel.create(data)
}
async function read(filter={},projection){
    let info = execModel.find(filter)
    console.log(await info)
    
    return await execModel.find(filter,projection)
}
async function updateExec(id,data){
    return await execModel.findByIdAndUpdate(id,data,
        {new:true, runValidators:true})
    }
async function deleteExec(id){
    return await execModel.findByIdAndDelete(id)
}
async function delExec(id,data){
    return await execModel.findByIdAndUpdate(id,data,
        {new:true, runValidators:true})
}

module.exports = {create, read, updateExec, deleteExec, delExec}


