const UserLogic = require('./BL/UserLogic')
const ExerciseLogic = require('./BL/ExerciseLogic')
const LangLogic = require('./BL/LangLogic')
const GeneralLogic = require('./BL/GeneralLogic')



//login
//register
//CRUD - single exercise
//read - exercise
//read - lang

module.exports = app => {
    //all users read
    app.get('/user', async (req,res) => {
    
        res.send(await UserLogic.readUser())
        
    })

    //login
    app.post('/login', async (req,res) => {
        let {username, password} = req.body
        let result
        try {

             result = await UserLogic.login(username,password)
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }
        res.send(result)
        
    })
    //register
    app.post('/register', async (req,res) => {
        let result
        try {

             result = await UserLogic.register(req.body)
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }
        res.send(result)
         
    })
    // Create exer
    app.post('/exercise', async (req,res) => {
        let result
        try {
            result = await ExerciseLogic.createExec(req.body)
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }

        res.send(result)
    })
    //create language
    app.post('/language', async (req,res) => {
        console.log(req.body)
        let result
        try {
            result = await LangLogic.createLang(req.body)
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }

        res.send(result)
    })
    //Read exercises
    app.get('/exercise', async (req,res) => {
        let result
        try {
            
            result = await ExerciseLogic.readAll()
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }

        res.send(result)
    })
    //read single ex
    app.get('/exercise/:id', async (req,res) => {
        let filter = req.params.id
        
        let result
        try {
            //result = await ExerciseLogic.readSingle({_id:filter})
            result = await GeneralLogic.getExec({_id:filter})
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }

        res.send(result)    
    })
    app.get('/exercise', async (req,res) => {
        let result
        try {
            
            result = await ExerciseLogic.readAll()
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }

        res.send(result)
    })
    //filter by language
    app.get('/langid/:id', async (req,res) => {
        let filter = req.params.id
        
        let result
        try {
            result = await ExerciseLogic.readSingle({prog_lang:filter})
            
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }

        res.send(result)    
    })


    //Update exer
    app.put('/exercise/:id', async (req,res) => {
        let filter = req.params.id
        let result
        try {
            result = await ExerciseLogic.updateExec(filter, req.body)
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }
    
        res.send(result)
        
    })
    //Delete exer
    app.put('/remove', async (req,res) => {
        const {_id} = req.body
        let result
        try {
            result = await ExerciseLogic.delExec(_id)
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }
    
        res.send(result)
        
    })
    
    //read lang
    app.get('/language', async (req,res) => {
        let result
        try {
            
            result = await LangLogic.readAllLang()
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }
    
        res.send(result)
    })
    
}
// {
//     "icon": "icon.jpg",
//     "title": "First",
//     "details": "bla bla",
//     "exes_type": "short",
//     "difficulty": "medium",
//     "prog_lang": "61d2f48ad1ad3efbcf6628d0",
//     "solution": "my solution",
//     "content": {
//         "content": "uuu",
//         "sources": [
//             {
//                 "name": "Link1",
//                 "url": "https://google.com"
//             }
//         ]
//     }
// }