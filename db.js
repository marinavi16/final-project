const 
    mongoose = require('mongoose'),
    userName = 'marinavi16',
    pass = 'nikili01',
    connectionString = `mongodb+srv://marinavi16:aA123456@cluster0.07psh.mongodb.net/Store?retryWrites=true&w=majority`
    
    // require('dotenv').config({path: './.env'})
    // mongoose.connect(process.env.CONNECTION_STRING) // 'mongodb+srv://admin:!4LPnPsY5pZ_QTD@cluster0.ijhzq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    //     .then(() => console.log('Mongo connected!'))
mongoose.connect(connectionString).then(() =>{
    console.log('mongo connected successfully!')
    }).catch(() => {
        throw 'mongo not connected'
    
})