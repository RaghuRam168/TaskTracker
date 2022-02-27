import Button from "./Button"
import { useState } from "react";
const AddTask = (props) => {
   
    const onSubmit = (event) =>{

           event.preventDefault();
           const newTask = {
               text:task,
               day:day,
               reminder:reminder
           }
            props.onAddTask(newTask)
            setDay('')
            setTask('')
            setReminder(false)
    }
    const[task,setTask]=useState('')
    const[day,setDay]=useState('')
    const[reminder,setReminder]=useState(false)
   


    return (
       <form className="add-form" onSubmit={onSubmit}  >
           <div className="form-control">
               <label>Task : </label>
               <input type='text' placeholder="Enter the task" value={task} onChange={(e)=>(setTask(e.target.value))} ></input>
           </div>
           <div className="form-control">
               <label>Day and Date: </label>
               <input type='text' placeholder="Enter day and the date" value={day} onChange={(e)=>(setDay(e.target.value))} ></input>
           </div>
           <div className="form-control form-control-check">
               <label>Reminder : </label>
               <input type='checkbox' value={false} checked={reminder} onChange={(e)=>(setReminder(e.currentTarget.checked))}></input>
           </div>
           <Button type='submit' className={'btn-block'} text={'Submit'} />
       </form>
    )
}

export default AddTask
