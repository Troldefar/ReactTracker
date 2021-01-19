import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'doctor',
      day: '23/2',
      reminder: true
    },
    {
      id: 12,
      text: 'doctor2',
      day: '22/1',
      reminder: true
    },
    {
      id: 3,
      text: 'doctor3',
      day: '25/3',
      reminder: false
    }
  ]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  // Remove
  const deleteTask = (id) => {
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
      <Header title='Prod tracker' onAdd={() => setShowAdd(!showAdd)} />
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
