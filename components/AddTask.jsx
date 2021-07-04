import React, { useState } from 'react'

const AddTask = (props) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")

    const onSubmit = (e)=> {
       e.preventDefault()
       
       if (!text) {alert("Please add a task")}
       else 
      { props.onAdd({text, day})
       setText("")
       setDay("")
       }
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
        
        <input className="btn btn-block" type="submit"  value="Save"/>
        </form>
    )
}

export default AddTask
