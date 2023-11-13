import { useState, useEffect } from 'react';
import './App.css';
import { DoTask } from './components/DoTask';
import { Task } from './components/Task';
import { v4 } from 'uuid';
import { getTasks, removeTask, setTask, updateTask } from './store/store';


function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
      const storedTasks = getTasks()
      if (storedTasks) {
          setTasks(storedTasks);
      }
  }, []);

  function addTask(task) {
    const newTasks = [...tasks, {
      status: 'progress',
      id: v4(),
      text: task
    }]
    setTask(newTasks)
    setTasks(newTasks)
  }

  function doneTask(task) {
    const newData = updateTask(task)
    setTasks(newData)
  }

  function deleateTask(id) {
      const newData = removeTask(id)
      setTasks(newData)
  }

  return (
    <div className="App-header">
      <DoTask addTask={addTask}/>
      { tasks.map((item, index) => <Task key={index} task={item} doneTask={doneTask} deleateTask={deleateTask}/>)}
    </div>
  );
}

export default App;
