import React, { FormEvent, useEffect, useState } from 'react';

import TextInput from './components/TextInput';
import Button from './components/Button';
import ToDoTask from './components/ToDoTask';

import {Background, Container, Form, TaskList, Options} from './styles';
import TaskItemProps from './interfaces/TaskItemProps';
import {addItem, getListAsObject, OrderByChecked, OrderByName, cleanList, DeleteMarked} from './services/LocalStorageService';


import rightArrowGreen from './icons/right-arrow-green.svg';
import rightArrowGray from './icons/right-arrow-gray.svg';
import sortList from './icons/sort-list.svg';
import sortAZ from './icons/sort-a-z.svg';
import deleteAll from './icons/delete-all.svg';
import list from './icons/list.svg';
import logo from './images/Logo_Luby.png';

function App() { 
  const TaskItemDefault = {
    name: '',
    checked:false
  }
  const [task, setTask] = useState<TaskItemProps>(TaskItemDefault);
  const [toDoList, setToDoList] = useState<TaskItemProps[]>([]);

  //EVENTOS DE CLICK
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

  
  return (
    <Background>
      <Container className="App">
      
        
        <p>TODO <img src={logo} alt=""/> </p>
        <p className="by">feito por: <a href="https://www.linkedin.com/in/arnaldo-assis-ferreira/">Arnaldo Assis Ferreira </a> </p>
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
                <img src={list} alt=""/>
            </Button>
            <Button onClick={handleClean}>
                <img src={deleteAll} alt=""/>
            </Button>

        </Options>

        <TaskList>
          {toDoList.map((item, index) => 
            (
              <ToDoTask key={index} index={index} item={item}/>
            ))}
        </TaskList>
        
      </Container>
    </Background>
  );
}

export default App;
