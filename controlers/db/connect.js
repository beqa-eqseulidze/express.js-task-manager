
const mongoose=require('mongoose')

const ConnnectionDb=(uri)=>{
  return  mongoose.connect(uri,{ useNewUrlParser:true,useUnifiedTopology:true })
    
}
module.exports=ConnnectionDb   