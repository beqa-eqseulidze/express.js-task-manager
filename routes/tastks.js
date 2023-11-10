const express=require('express');
const {
    getAllTasks,
    createTasks,
    getByid,
    updateTask,
    deleteTasks}=require('../controlers/tasks')
const router=express.Router();

router.route('/').get(getAllTasks);
router.route('/').post(createTasks);

router.route('/:id').get(getByid);
router.route('/:id').patch(updateTask);
router.route('/:id').delete(deleteTasks);
// ზედა სამი იგივეა რაც ეს ერთი
// router.route('/:id').get(getByid).patch(updateTask).delete(deleteTasks)





module.exports=router