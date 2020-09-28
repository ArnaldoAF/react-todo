import React, { useState } from 'react';
import Container from './styles';
import TaskItemProps from '../../interfaces/TaskItemProps';
import {editItem} from '../../services/LocalStorageService';

import circleChecked from '../../icons/circle-checked.svg';
import circleEmpty from '../../icons/circle-empty.svg';

interface ToDoTaskProps {
    item: TaskItemProps;
    index: number;
}


const ToDoTask:React.FC<ToDoTaskProps> = (props) => {
    const {item, index} = props;
    const [localItem, setLocalItem] = useState<TaskItemProps>(item);
    const [checked, setChecked] = useState(item.checked);

    function handleCheck() {
        
        
        var LocalItem = {
            name: item.name,
            checked: !checked
        }
        setChecked(!checked);
        
        console.log(LocalItem);
        editItem(LocalItem, index);
    } 
    return (
        <Container onClick={handleCheck}>
            <img src={checked ? circleChecked : circleEmpty} className="check-icon" alt=""/>
            <p className={checked ? "checked" : ""}>{item.name}</p>
        </Container>
    )
}

export default ToDoTask;