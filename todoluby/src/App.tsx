import React, { FormEvent, useEffect, useState } from 'react';
import TextInput from './components/TextInput';
import Button from './components/Button';
import ToDoTask from './components/ToDoTask';
import {Container, Form, TaskList, Options} from './styles';
import TaskItemProps from './interfaces/TaskItemProps';
import {addItem, getListAsObject, OrderByChecked, OrderByName, cleanList, DeleteMarked} from './services/LocalStorageService';


import rightArrowGray from './icons/right-arrow-gray.svg';
import rightArrowGreen from './icons/right-arrow-green.svg';
import sortList from './icons/sort-list.svg';
import sortAZ from './icons/sort-a-z.svg';

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
    setToDoList(getListAsObject());
    setTask(TaskItemDefault);
  }

  async function handleSortAZ() {
    setToDoList([]);
    await OrderByName();
    
    setToDoList(getListAsObject());
  }

  async function handleSortChecked() {
    setToDoList([]);
    await OrderByChecked();
    setToDoList(getListAsObject());
  }

  async function handleDeleteMarked() {
    setToDoList([]);
    await DeleteMarked();
    setToDoList(getListAsObject());
  }

  async function handleClean() {
    setToDoList([]);
    await cleanList();
    setToDoList(getListAsObject());
  }

  useEffect(()=>{
    setToDoList(getListAsObject());
  },[]);

  

  //<div>Icons made by <a href="https://www.flaticon.c
  //<div>Icons made by <a href="https://www.flaticon.c
  //Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  //Icons made by <a href="https://www.flaticon.com/authors/prettycons" title="prettycons">prettycons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

  
  return (
    <Container className="App">
    
      
      <h1>TODO LUBY</h1>
      <Form action="" onSubmit={handleAddList}>
        
        <TextInput type="text" onChange={(event) => setTask({name: event.target.value, checked:false})} value={task.name}/>
        <Button type="submit" disabled={task.name.length < 5}> 
          <img src={(task.name.length < 5) ? rightArrowGray : rightArrowGreen} className="enter-icon"alt=""/>
         </Button>
      </Form>

      <Options>
          <Button onClick={handleSortAZ}>
            <img src={sortAZ} alt=""/>
          </Button>
          <Button onClick={handleSortChecked}>
              <img src={sortList} alt=""/>
          </Button>
          <Button onClick={handleDeleteMarked}>
              <img src={sortAZ} alt=""/>
          </Button>
          <Button onClick={handleClean}>
              <img src={sortList} alt=""/>
          </Button>

      </Options>

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
