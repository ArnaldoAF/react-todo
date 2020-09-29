import React, { useState } from 'react';
import Container from './styles';
import {editItem} from '../../services/LocalStorageService';

import TaskItemProps from '../../interfaces/TaskItemProps';

import circleChecked from '../../icons/circle-checked.svg';
import circleEmpty from '../../icons/circle-empty.svg';

interface ToDoTaskProps {
    item: TaskItemProps;
    index: number;
}


const ToDoTask:React.FC<ToDoTaskProps> = (props) => {
    const {item, index} = props;
    const [checked, setChecked] = useState(item.checked);

    function handleCheck() {
        var LocalItem = {
            name: item.name,
            checked: !checked
        }
        setChecked(!checked);
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