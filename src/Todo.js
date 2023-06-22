import React, { useEffect, useState } from 'react';
import './Todo.css';
import AddTask from './AddTask';
import ListTasks from './ListTasks';

const Todo = () => {
    const [tasks, setTasks] = useState([])
    useEffect(()=>{
        document.title = `You have ${tasks.length} pending task(s)`
    })

    const addTasks = (title) => {
        const newTasks = [...tasks, { title }];
        setTasks(newTasks);
    }
    const removeTasks = (index) => {
        const newTask = [...tasks]
        newTask.splice(index, 1);
        setTasks(newTask)
    }

    return (
        <>
            <div className='todo-container'>
                <div className='header'>TODO APP</div>
                <div className='add-task'>
                    <AddTask addTasks={addTasks} />
                </div>
                <div className='list-tasks'>
                    {tasks.map((task,index) => (
                        <ListTasks task={task} removeTasks={removeTasks} index={index} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Todo