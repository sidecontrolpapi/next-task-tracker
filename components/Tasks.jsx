import Task from "./Task"

const Tasks = (props) => { 

    return (
        <div>
            {props.tasks.map((task)=><Task key={task.id} onDelete={props.onDelete} onToggle={props.onToggle} task={task}></Task>)}
        </div>
    )
}


export default Tasks
