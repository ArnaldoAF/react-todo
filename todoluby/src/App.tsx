import React, { FormEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput';
import Button from './components/Button';
import ToDoTask from './components/ToDoTask';

function App() {
  const [task, setTask] = useState("");
  const [toDoList, setToDoList] = useState<string[]>([]);

  function handleAddList(event:FormEvent) {
    event.preventDefault();
    var localToDoList = toDoList.concat(task);
    setToDoList(localToDoList);
    setTask('');
    localStorage.setItem("@todoluby/tasks", JSON.stringify(localToDoList));
  }

  useEffect(()=>{
    var localToDoList = localStorage.getItem("@todoluby/tasks");
    var localList = localToDoList ? JSON.parse(localToDoList) : [];
    
    setToDoList(localList);
  },[]);

  
  return (
    <div className="App">
      <h1>TODO LUBY</h1>
      <form action="" onSubmit={handleAddList}>
        
        <TextInput type="text" onChange={(event) => setTask(event.target.value)} value={task}/>
        <Button type="submit" disabled={task.length < 5}> + </Button>
      </form>

      <ul>
        {toDoList.map(item => 
          (
            <li>
              <ToDoTask name={item} checked/>
            </li>
          ))}
      </ul>


      
    </div>
  );
}

export default App;
