import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks'
import   Header  from './Header';
function App() {

const [tasks,setasks]=useState([
    {
      id:1,
      text:'1',
      day:'monday',
      reminder:false
    },
    {
      id:2,
      text:'2',
      day:'cmonday',
      reminder:false
    },
    {
      id:3,
      text:'3',
      day:'monday',
      reminder:false
    },
    {
      id:4,
      text:'4',
      day:'mondcdsdday',
      reminder:true
    }
  ])

const[addForm,setAddForm]=useState(false)

//Adding Remainder
const onDoubleClick = (id) =>{
  console.log("DoubleClicked"+id)
  // setasks(tasks.filter((task) => (task.id === id)?{...task,remainder:(!task.remainder)}:task))
  setasks(tasks.map((task) => (task.id === id)?{...task,reminder:(!task.reminder)}:task))
}


//Form visibility
const onClickAddHandler = () =>{
  console.log("App.js")
  setAddForm(!addForm)

}

//Adding a task
const onAddTaskHandler = (task) => {
  const id=Math.floor(Math.random()*10000+1)
  const newTask={id,...task}
  setasks([...tasks,newTask])
}

//Delete a task
const onDeleteHandler = (id) =>{
  setasks(tasks.filter((task) => (task.id !== id)))
}

  return (
   <div className='container'>
     {(addForm)?<AddTask onAddTask={onAddTaskHandler}/>:''}
     <Header visibility={addForm} onClickAdd={onClickAddHandler}/>
     { (tasks.length!==0)? <Tasks onDelete={onDeleteHandler} onDoubleClick={onDoubleClick} tasks={tasks}/>:<h3>No tasks</h3>}
   </div>
  );
}

export default App;
