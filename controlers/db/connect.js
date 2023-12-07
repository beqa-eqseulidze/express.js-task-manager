
const mongoose=require('mongoose')

const ConnectionDb=(uri)=>{
  return  mongoose.connect(uri,{ useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
    
}
module.exports=ConnectionDb   