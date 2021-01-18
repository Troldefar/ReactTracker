import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <Header title='Prod tracker' />
      {
        tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} /> :
        'No tasks avaliable'
      }
    </div>
  );
}

export default App;
