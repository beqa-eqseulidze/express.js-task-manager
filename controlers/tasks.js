

const getAllTasks=(req,res)=>{
    res.send('get all tasks')
}

const createTasks=(req,res)=>{
    res.send('create tasks')
}

const getByid=(req,res)=>{
    res.send('get one task')
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