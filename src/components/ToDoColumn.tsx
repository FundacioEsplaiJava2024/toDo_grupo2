

const ToDoColumn = () => {
    console.log("rendered ok todo");
  return (
    <>
    <div className = "to_do_column_container">
        <h2 className='to_do_title'>TO DO 🎯</h2>
        <div className="column_style">
            <ul className='to_do_list'>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
            <input type="text"  className='to_do_text_box'/>
            <button>Add Task</button>
        </div>
    </div>

    </>

  )
}

export default ToDoColumn