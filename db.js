const mongoose = require('mongoose');

<<<<<<< HEAD
const DATABASE = process.env.DATABASE
=======
const {DATABASE} = require('./config/key');
>>>>>>> c403d0dc0ed8b47eeb5f513c6fee4343df30e993

    mongoose.connect(DATABASE, {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify:false
    }).then(()=>{
        console.log("Database connection successfull");
    }).catch((err)=>console.log(`Database doesn't exists.`));

