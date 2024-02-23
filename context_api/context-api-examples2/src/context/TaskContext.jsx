import { createContext, useState } from "react";
import {v1 as uuid} from "uuid"
 export const taskContextApi=createContext()

 const TaskProvider=({children})=>{
    let [task,setTask]=useState("")
    const addTask=(title,author,description)=>{
        setTask([...task,{title,description,author,id:uuid()}])
    }
    return (
        <taskContextApi.Provider value={{addTask,task}}>{children}</taskContextApi.Provider>
    )
 }
 export default TaskProvider