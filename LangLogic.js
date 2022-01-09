const LangController = require('../DL/LangController')


async function readAllLang(){
    return LangController.readLang ()
    
}
async function readLang(filter){
    return LangController.readLang(filter)
    
}


module.exports = { ...LangController, readAllLang, readLang }