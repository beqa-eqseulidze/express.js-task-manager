
const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
    name:{
        required:[true, 'name field is required'],        
        type:String,
        minLength:[2, 'minimum length of name field must be 2 characters'],
        maxLength:[200,'max name filed length is 200 characters'],
        unique: [true, 'name field is unique'],
        trim:true
        
    },
    completed:{
        type:Boolean,
        required:[true, 'complted field is required'],
        default:false,     
    }
})

module.exports=mongoose.model('tasks',TaskSchema)