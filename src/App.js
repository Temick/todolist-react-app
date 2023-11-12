import { useState, useEffect } from 'react';
import './App.css';
import { DoTask } from './components/DoTask';
import { Task } from './components/Task';


function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
      }
  }, []);

  function addTask(task) {
    setTasks([...tasks, task])
    localStorage.setItem('tasks', JSON.stringify(tasks));
    let myElement = document.getElementById("inputTask");
    myElement.value = '';
  }

  return (
    <div className="App-header">
      <DoTask tasks={tasks} addTask={addTask}/>
      { tasks.map((item, index) => <Task key={index} task={item} index={index}/>)}
    </div>
  );
}

export default App;
