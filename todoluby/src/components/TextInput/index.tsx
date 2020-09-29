import React, { InputHTMLAttributes } from 'react';
import {Input} from './styles';


const TextInput:React.FC< InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const {...rest}  = props

    return (
        <Input {...rest}/>
    )
}

export default TextInput;