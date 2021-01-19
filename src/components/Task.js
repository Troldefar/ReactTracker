const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div onDoubleClick={() => onToggle(task.id)} className={`task ${task.reminder ? 'reminder' : ''}`}>
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
