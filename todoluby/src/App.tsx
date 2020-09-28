import React, { FormEvent, useEffect, useState } from 'react';
import TextInput from './components/TextInput';
import Button from './components/Button';
import ToDoTask from './components/ToDoTask';
import {Container, Form, TaskList} from './styles';
import TaskItemProps from './interfaces/TaskItemProps';
import {addItem, getListAsObject} from './services/LocalStorageService';

import rightArrowGray from './icons/right-arrow-gray.svg';
import rightArrowGreen from './icons/right-arrow-green.svg';

function App() { 
  const TaskItemDefault = {
    name: '',
    checked:false
  }
  const [task, setTask] = useState<TaskItemProps>(TaskItemDefault);
  const [toDoList, setToDoList] = useState<TaskItemProps[]>([]);

  function handleAddList(event:FormEvent) {
    event.preventDefault();
    
    addItem(task);
    var localToDoList = toDoList.concat(task);
    setToDoList(localToDoList);
    setTask(TaskItemDefault);
  }

  useEffect(()=>{
    setToDoList(getListAsObject());
  },[]);

  
  return (
    <Container className="App">
    
      
      <h1>TODO LUBY</h1>
      <Form action="" onSubmit={handleAddList}>
        
        <TextInput type="text" onChange={(event) => setTask({name: event.target.value, checked:false})} value={task.name}/>
        <Button type="submit" disabled={task.name.length < 5}> 
          <img src={(task.name.length < 5) ? rightArrowGray : rightArrowGreen} className="enter-icon"alt=""/>
         </Button>
      </Form>

      <TaskList>
        {toDoList.map((item, index) => 
          (
            <ToDoTask key={index} index={index} item={item}/>
          ))}
      </TaskList>
      


      
    
    </Container>
    
  );
}

export default App;
