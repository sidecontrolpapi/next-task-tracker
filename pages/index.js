import Header from '../components/Header';
import Tasks from '../components/Tasks';

import { useState } from "react"
import AddTask from '../components/AddTask';
import Footer from '../components/Footer'


export default function Home() {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
   setTasks([...tasks, newTask])
  }

const togglecompleted = (id) => {
 setTasks(tasks.map((task) => task.id===id ? {...task, completed:!task.completed}: task   ))
}
  var [tasks, setTasks] = useState([])
  const [showAdd, setShowAdd] = useState(false)
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
