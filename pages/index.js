import Header from '../components/Header';
import Tasks from '../components/Tasks';

import { useState } from "react"
import AddTask from '../components/AddTask';
import Footer from '../components/Footer'


export default function Home({tasksData}) {
  var [tasks, setTasks] = useState(tasksData)
  const [showAdd, setShowAdd] = useState(false)

  const deleteTask = (id) => {
    fetch(`http://localhost:8000/${id}/`, { method:"DELETE"})
    .then(setTasks(tasks.filter(task=>task.id!=id)))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
   setTasks([...tasks, newTask])
  }

const togglecompleted = (id) => {
 setTasks(tasks.map((task) => task.id===id ? {...task, completed:!task.completed}: task   ))
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
   const  res = await fetch('http://localhost:8000')
   const tasksData = await res.json()

   return {
     props: {
       tasksData
     },
     revalidate:5
     
   }

}
