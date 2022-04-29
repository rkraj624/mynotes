const mongoose = require('mongoose');

const {DATABASE} = require('../config/key');

    mongoose.connect(DATABASE, {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify:false
    }).then(()=>{
        console.log("Database connection successfull");
    }).catch((err)=>console.log(`Database doesn't exists.`));

