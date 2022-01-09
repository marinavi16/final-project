
const ExerController = require('../DL/ExerciseController')

async function createExec(data){
    return ExerController.create(data)
    
}
async function readAll(){
    return ExerController.read()
    
}
async function readSingle(filter){
    return ExerController.read(filter)
    
}

async function updateExec(id,data){
    
    return ExerController.updateExec(id, data)
    
}
async function delExec(id){
    
    return ExerController.updateExec(id, {status:'deleted'})
    
}


module.exports = { ...ExerController, readAll, createExec, readSingle, updateExec, delExec }