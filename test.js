require('../db.js')
const execModel = require('./ExerciseModel')

const execTemplate = {
    icon: 'icon.jpg',
    title:'New',
    details: 'bla bla',
    status: 'draft',
    // creator_id: {
    //     type: mongoose.SchemaTypes.ObjectId 
    // },
    exes_type: "short",
    difficulty: "medium",
    tags: 'tags',
    prog_lang: '61d2f48ad1ad3efbcf6628d0',                        //new mongoose.SchemaTypes.ObjectId,
    dev_time: 'time',
    content: {
        content:"aaa",
        sources:[{
            name: "Link1",
            url: "https://google.com"
        
     } ]},

    solution: "my solution"
    
}

async function createMyExec(data){
    return await execModel.create(data)
}
async function readALLExec(filter={},projection){
    let info = execModel.find(filter,projection)
    console.log(await info)

    return await execModel.find(filter,projection)
}
async function updateExec(id,data){
    return await execModel.findByIdAndUpdate(_id,data,
         {new:true, runValidators:true})
}
async function deleteExec(id){
    return await execModel.findByIdAndDelete(id)
}
//const data = {status:'draft'}
async function delExec(id,data){
    let updated = execModel.findByIdAndUpdate(id,data,
        {new:true, runValidators:true})
    console.log(await updated)
    return await execModel.findByIdAndUpdate(id,data,
         {new:true, runValidators:true})
}

//let id= '61d5f65de795cc31afcce030'
//delExec(id,{status:'deleted'})
//deleteExec(id)
//updateExec(id);
//console.log('start create');
//createMyExec(execTemplate)
readALLExec({"_id":'61d5f65de795cc31afcce030'},"title icon status")






