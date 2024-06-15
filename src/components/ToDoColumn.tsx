import React from 'react'

const ToDoColumn = () => {
    console.log("rendered ok todo");
  return (
    <>
    <div className = "to_do_column_container">
        <h2 className='to_do_title'>TO DO 🎯</h2>
        <ul className='to_do_list'>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
        </ul>
        <input type="text"  className='to_do_text_box'/>
    </div>

    <div className = "to_do_column_container">
        <h2 className='to_do_title'>DOING 📝</h2>
        <ul className='to_do_list'>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
        </ul>
        <input type="text"  className='to_do_text_box'/>
    </div>

    <div className = "to_do_column_container">
        <h2 className='to_do_title'>DONE ✅</h2>
        <ul className='to_do_list'>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
        </ul>
        <input type="text"  className='to_do_text_box'/>
    </div>




    </>

  )
}

export default ToDoColumn