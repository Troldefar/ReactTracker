const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3>
        { task.text }
        <button onClick={() => onDelete(task.id)} style={{ marginTop: '10px' }}>
          ✖️
        </button>
      </h3>
      <p>
        { task.day }
      </p>
    </div>
  )
}

export default Task
