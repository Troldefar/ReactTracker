import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About/About';

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

  // All
  const fetchTasks = async () => {
    const res  = await fetch('http://localhost:5500/tasks');
    const data = await res.json();
    return data;
  };

  // Single
  const fetchTask = async (id) => {
    const res  = await fetch(`http://localhost:5500/tasks/${id}`);
    const data = await res.json();
    return data;
  }

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
  const markAsComplete = async (id) => {
    const toggledTask = await fetchTask(id);
    const updatedTask = { ...toggledTask, reminder: !toggledTask.reminder };
    const res = await fetch(`http://localhost:5500/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) => 
        task.id === id ? 
        {...task, reminder: !data.reminder} : task
      )
    );
  }

  return (
    <Router>
      <div className="container">
        <Header title='Prod tracker' onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
        <Route path='/' exact render={(props) => (
          <>
            { showAdd && <AddTask  onAdd={addTask} /> }
            {
              tasks.length > 0 ?
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={markAsComplete} /> :
              'No tasks avaliable'
            }
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
