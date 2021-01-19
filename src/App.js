import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    }
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res  = await fetch('http://localhost:5500/tasks');
    const data = await res.json();
    return data;
  };

  // Add task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5500/tasks', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  }

  // Remove
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5500/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Set task as complete
  const markAsComplete = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ));
  }

  return (
    <div className="container">
      <Header title='Prod tracker' onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
      { showAdd && <AddTask  onAdd={addTask} /> }
      {
        tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={markAsComplete} /> :
        'No tasks avaliable'
      }
    </div>
  );
}

export default App;
