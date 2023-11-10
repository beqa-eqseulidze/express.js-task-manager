console.log('tast manager beqa')
const express=require('express');
const app=express();
const tasks=require('./routes/tastks')

//midlleware
// app.use(express.json())

app.use('/api/v1/tasks',tasks)



// app.get('api/v1/tasks')
// app.post('api/v1/tasks')
// app.get('api/v1/tasks/:id')
// app.patch('api/v1/tasks/:id')
// app.delete('api/v1/tasks/:id')

const port=3000;
app.listen(port, console.log('server listening on port '+port+'...'))