const express=require('express');
const app=express();


const tasks=require('./routes/tasks');
const connectDB=require('./db/connect')

app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("hello")
// })

app.use('/api/v1/tasks',tasks);
app.use(express.static("./public"))




const start=async()=>{
    try {
        await connectDB()
        app.listen(4000,()=>{
            console.log("server is listening on port 4000...")
        })
        
    } catch (error) {
        console.log(error)
    }
}

start()