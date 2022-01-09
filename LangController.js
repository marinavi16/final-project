const LangModel = require('./LangModel')

require('../../db')

async function createLang(data){
    return await LangModel.create(data)
}
async function readLang(filter={},projection){
    return await LangModel.find(filter, projection)
}
async function updateLang(_id,data){
    return await LangModel.findByIdAndUpdate(
        _id,data,
        {new: true, runValidators: true}
    )
}


module.exports = {createLang, readLang, updateLang}