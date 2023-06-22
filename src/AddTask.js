import React, { useState } from 'react'

const AddTask = ({addTasks}) => {
  const [value,setValue] = useState("")

  const addtext = ()=>{
    addTasks(value);
    setValue("")
  }
  return (
    <>
        <div className='input-container'>
            <input type="text" className='input' placeholder='Add a new Task'
            onChange={(e)=>{setValue(e.target.value)}} value={value} />
            <button onClick={addtext} className='add-btn'>ADD</button>
        </div>
    </>
  )
}

export default AddTask