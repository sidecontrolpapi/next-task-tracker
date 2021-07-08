import Header from '../components/Header';
import Tasks from '../components/Tasks';

import { useState} from "react"
import AddTask from '../components/AddTask';


export default function Home({tasksData}) {

 


  var [tasks, setTasks] = useState(tasksData)
  const [showAdd, setShowAdd] = useState(false)

  const deleteTask = (id) => {
    fetch('https://drf-task-tracker.herokuapp.com/'+id, { method:"DELETE"})
    .then(setTasks(tasks.filter(task=>task.id!=id)))
  }

  const addTask = (task) => {
    const newTask = {...task, "completed":false }
   fetch("https://drf-task-tracker.herokuapp.com/", {
    method:"POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(newTask)
  }
   )
   .then((res)=>res.json())
   .then((res)=>{setTasks([...tasks, res])})
   
   
  }

const togglecompleted = (id) => {
  const task = tasks.find(item=>item.id==id)
  const {text, day, completed} = task
  
  fetch("https://drf-task-tracker.herokuapp.com/"+id,
  {
    method:'PUT',
    headers: {'Content-Type':'application/json'},
    body:JSON.stringify({text, day, completed:!completed})
    
  })
  .then(res=>res.json())
  .then((res)=>{setTasks(tasks.map(item=>item.id==id?res:item))})
  
}
  
  const toggleShow = () => {
    setShowAdd(!showAdd)
  }

  return (
 
    <div className="container">
      <Header showAdd={showAdd} toggleShow={toggleShow}/>
  
    
     {showAdd &&  <AddTask onAdd={addTask}/> }
     {tasks.length>0? <Tasks onToggle={togglecompleted} onDelete={deleteTask} tasks={tasks}/>:"No tasks to show"}
    
    
 {/*  <Footer/>  */}
    </div>
  
  )
}

export const getStaticProps = async () => {
   const  res = await fetch('https://drf-task-tracker.herokuapp.com')
   const tasksData = await res.json()

   return {
     props: {
       tasksData
     },
     
     
   }

}
