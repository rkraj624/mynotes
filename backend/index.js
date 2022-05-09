const dotenv = require("dotenv")
const express = require('express')
var cors = require('cors') 

dotenv.config({path:"./config.env"})
require('./db');


const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
  res.json("My Notes is working on Heroku")
})

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

if(process.env.NODE_ENV=='production'){
  const path = require('path')

    app.use(express.static(("client/build")))
}


app.listen(PORT, () => {
  console.log(`MyNotes backend listening at http://localhost:${PORT}`)
})
