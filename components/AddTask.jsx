import React, { useState } from 'react'

const AddTask = (props) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e)=> {
       e.preventDefault()
       console.log("hey")
       if (!text) {alert("Please add a task")}
       else 
       props.onAdd({text, day, reminder})
       setText("")
       setDay("")
       setReminder(false)
    }

    return (
        <form onSubmit={onSubmit}
        className="add-form">
          <div className="form-control">
              <label htmlFor="">Task</label>
              <input type="text" placeholder="Add Task" value={text} onChange={(e)=>{setText(e.target.value )}}/>
        </div>  
        <div className="form-control">
              <label htmlFor="">Day and Time</label>
              <input  value={day} onChange={(e)=>{setDay(e.target.value )}} type="text" placeholder="Add Day and Time"/>
        </div>  
        <div className="form-control form-control-check">
              <label htmlFor="">Set Reminder</label>
              <input checked={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}} type="checkbox" />
        </div>  
        <input className="btn btn-block" type="submit"  value="Save"/>
        </form>
    )
}

export default AddTask
