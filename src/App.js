// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react'
import Task from "./components/Tasks"

import Header from "./components/Header"
import AddTask from './components/AddTask'

function App() {
  const  [tasks, setTasks] = useState([
    {
        id : 1,
        text : "Doctors Appointment ",
        day : "Feb 5th at 10:20 pm", 
        reminder :"true",
    
    }, 
    {
        id : 2,
        text :"Meeting at school",
        day : "Feb 6th at 1:30 pm",
        reminder: true,
    
    }, 
    
    {
        id : 3,
        text :"Food shopping",
        day : "Feb 5th at 1:30 pm",
        reminder :true,
    },
    
  ])

  //Delete Task
  const deleteTask = (id) => {
  //console.log('delete', id)

  setTasks(
    tasks.filter((task)=> task.id !==id))
    
  }


  //Toggle reminder
  const toggleReminder = (id) => {
  //console.log(id)

  setTasks(
    tasks.map((task) =>
    task.id === id ? {...task,  reminder : !task.reminder } :task)
    
    
  )

  }
  
   
  return (


    <div className="container">
      <Header/>
      <AddTask />

      {tasks.length > 0 ? (
      <Task tasks = {tasks}

      onDelete ={deleteTask} onToggle = {toggleReminder} 
      />) : (
        'There is no Task to show'
      )}
      
    </div>
  );
}


export default App;
