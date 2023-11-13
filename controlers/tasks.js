
const Task=require('../models/tasks')


const getAllTasks= (req,res)=>{
    res.send('get all tasks works')
}

const createTasks= async(req,res)=>{
   const newTasks=await Task.create(req.body)
    res.status(201).json({newTasks})
}

const getByid=(req,res)=>{
    res.send('get one task beqa')
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