//const tasks =
import {useState} from 'react'

const Task = () => {
    const  [tasks, setTask] = useState(
        [
            {
                id : 1,
                text : "Doctors Appointment ",
                day : "Feb 5th at 10:20 pm", 
                reminder :"true",
            
            },
            
            {
                id : 1,
                text :"Meeting at school",
                day : "Feb 6th at 1:30 pm",
                reminder: true,
            
            }, 
            
            {
                id : 2,
                text :"Food shopping",
                day : "Feb 5th at 1:30 pm",
                reminder :true,
            },
            
            ] 
    )
    return (
        <>
        {tasks.map((task) => (<h3 key = {task.id }>{task.text}</h3>))}

        </>
    )
}

export default Task