require('dotenv').config()
const express=require('express');
const app=express();
const tasks=require('./routes/tastks');
const ConnectionDb= require('./controlers/db/connect');


//midlleware
app.use(express.json());

app.use('',tasks);


const start= async()=>{
    try{
        const uri=process.env.DB_CONNECTION_STR
        await ConnectionDb(uri);
        const port=3000;
        app.listen(port, console.log('server listening on port '+port+'...'));
    }
    catch(error){
        console.log(error.message)
    }
   
}
start()
