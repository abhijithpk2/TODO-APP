import React from 'react'

const ListTasks = ({task,removeTasks,index}) => {
  return (
    <>
        <div className='list-tasks'> {task.title}
            <button onClick={()=>{removeTasks(index)}} className='delete-btn'>Delete</button>
        </div>
    </>
  )
}

export default ListTasks