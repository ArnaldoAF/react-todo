import React from 'react';

interface ToDoTaskProps {
    name: string;
    checked: boolean;
}

const ToDoTask:React.FC<ToDoTaskProps> = (props) => {
    const {name, checked} = props;

    return (
        <>
        {name}
        </>
    )
}

export default ToDoTask;