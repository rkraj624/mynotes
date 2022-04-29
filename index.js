const dotenv = require("dotenv")
const express = require('express')
var cors = require('cors') 

dotenv.config({path:"./config.env"})
require('./db');


const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

<<<<<<< HEAD
if(process.env.Node_ENV==='production'){
=======
if(process.env.NODE_ENV=='production'){
  const path = require('path')
>>>>>>> c403d0dc0ed8b47eeb5f513c6fee4343df30e993

    app.use(express.static(("client/build")))
}


app.listen(PORT, () => {
  console.log(`MyNotes backend listening at http://localhost:${PORT}`)
})
