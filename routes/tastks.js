const express=require('express');
const {
    getAllTasks,
    createTasks,
    getByid,
    updateTask,
    deleteTasks
    }=require('../controlers/tasks')
const router=express.Router();


// ქვედა ორი იგივეა რაც ეს ერთი
router.route('/api/v1/saqme').get(getAllTasks).post(createTasks);
// router.route('/api/v1/tasks').get(getAllTasks);
// router.route('/api/v1/tasks').post(createTasks);

//ქვედა სამი იგივეა რაც ეს ერთი
router.route('/:id').get(getByid).patch(updateTask).delete(deleteTasks)

// router.route('/api/v1/tasks/:id').get(getByid);
// router.route('/api/v1/tasks/:id').patch(updateTask);
// router.route('/api/v1/tasks/:id').delete(deleteTasks);





module.exports=router
