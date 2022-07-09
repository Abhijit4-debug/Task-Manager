const express=require('express');
const Task=require("../models/task")
const app=express();


const allTasks=async (req,res)=>{
    const tasks=await Task.find({})
    res.status(200).json({tasks})
}
const createTasks= async (req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json({task})
}
const updateTasks=async (req,res)=>{
    const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
    

}
const deleteTasks=async (req,res)=>{
    const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
    
}
const getTasks=async (req,res)=>{
    const taskid=req.params.id;
    const task=await Task.findOne({_id:taskid});

    res.json({task});
}


module.exports={allTasks,createTasks,getTasks,updateTasks,deleteTasks};