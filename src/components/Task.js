import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = (props) => {
//(props.tasks.reminder)?"task reminder":"task"
    return (
        <div  className={`task ${props.tasks.reminder?"reminder":''}`} onDoubleClick={()=>props.onDoubleClick(props.tasks.id)}>
            <h3>{props.tasks.text}
            <div onClick={()=>(props.onDelete(props.tasks.id))}><FaTimes style={{color:"red", cursor:"pointer"}} /></div>
            </h3>
            <p>{props.tasks.day}</p>
            
        </div>
    )
}

export default Task;
