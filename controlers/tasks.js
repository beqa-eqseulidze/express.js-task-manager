
const Task=require('../models/tasks')

const createTasks= async(req,res)=>{
    try{
        const data=await Task.create(req.body);        
        res.status(201).json({data})
        }
    catch(error){
        res.status(500).json(error)
    }
}

const getAllTasks= async (req,res)=>{
    try{
        const data=await Task.find({})
        res.status(200).json({data})
    }
    catch(err){
        res.status(500).json(err)
    }
   
}



const getByid= async(req,res)=>{
    try{
        let data=await Task.findOne( {_id:req.params.id})
        if(!data){
           return res.status(200).json({data:[]})
        }
        res.status(200).json({data})
    }
    catch(error){
        res.status(500).json({error})
    }

    
}

const updateTask=(req,res)=>{
    res.send('update tasks')
}

const deleteTasks=(req,res)=>{
    res.send('delete tasks')
}
module.exports={
    getAllTasks,
    createTasks,
    getByid,
    updateTask,
    deleteTasks
}