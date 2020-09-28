import React from 'react';
import TaskItemProps from '../../interfaces/TaskItemProps';

import circleChecked from './icons/circle-checked.svg';
import circleEmpty from './icons/circle-empty.svg';

interface ToDoTaskProps {
    item: TaskItemProps;
}


const ToDoTask:React.FC<ToDoTaskProps> = (props) => {
    const {item} = props;

    return (
        <>
        {item.name}
        </>
    )
}

export default ToDoTask;