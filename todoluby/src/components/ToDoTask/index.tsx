import React, { useState } from 'react';
import Container from './styles';
import TaskItemProps from '../../interfaces/TaskItemProps';

import circleChecked from '../../icons/circle-checked.svg';
import circleEmpty from '../../icons/circle-empty.svg';

interface ToDoTaskProps {
    item: TaskItemProps;
}


const ToDoTask:React.FC<ToDoTaskProps> = (props) => {
    const {item} = props;
    const [checked, setChecked] = useState(item.checked);

    function handleCheck() {
        setChecked(!checked);
    }
    return (
        <Container onClick={handleCheck}>
            <img src={checked ? circleChecked : circleEmpty} className="check-icon" alt=""/>
            <p className={checked ? "checked" : ""}>{item.name}</p>
        </Container>
    )
}

export default ToDoTask;