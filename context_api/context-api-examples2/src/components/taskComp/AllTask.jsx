import { useContext } from "react"
import { taskContextApi } from "../../context/TaskContext"
import Task from './Task';

const AllTask = () => {
    let {task}=useContext(taskContextApi)
  return (
    <section id="task">
        <article>
            <h2>all task</h2>
            <div className="list">
                {
                    task ==="" ? "loading..." : task.length >0 && task.map(t=>{
                        return (
                            <Task key={t.id} {...t}/>
                        )
                    })
                }
            </div>
        </article>
    </section>
  )
}

export default AllTask