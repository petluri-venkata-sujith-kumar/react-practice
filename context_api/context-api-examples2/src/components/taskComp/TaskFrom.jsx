import { useContext, useState } from "react"
import { taskContextApi } from "../../context/TaskContext"

const TaskFrom = () => {
    let {addTask}=useContext(taskContextApi)
    let [state,setState]=useState({
        title:"",
        author:"",
        description:"",
        status:false
    })
    let {title,author,description,status}=state
    let handleChange=e=>{
        let {name,value}=e.target
        setState({...state,[name]:value})
    }
    let handleSubmit =e=>{
        e.preventDefault()
        try {
            setState({title:"",author:"",description:""})
            // console.log(task);
            addTask(title,author,description)
        } catch (error) {
            console.log(error);
        }
    }
    // console.log(task);
  return (
    <section id='form'>
        <article>
            <h2>Add task to the basket</h2>
            <main>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="title" name="title" required value={title} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">author</label>
                        <input type="text" placeholder="author" name="author" required value={author} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">description</label>
                        <textarea name="description" id="description" value={description} cols="30" rows="10" onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <button>{status ===true ?"loading...":"add task"}</button>
                    </div>
                </form>
            </main>
        </article>
    </section>
  )
}

export default TaskFrom