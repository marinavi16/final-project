require('dotenv').config({path: '../.env'})
require ('../db')
var cors = require('cors')

 
const 
express = require('express'),
app = express(),
PORT = process.env.PORT || 3333

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./Router')(app)

app.listen(PORT, () => console.log(`Server is running.Port: ${PORT}`))