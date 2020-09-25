import React, { InputHTMLAttributes } from 'react';


const TextInput:React.FC< InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const {...rest}  = props

    return (
        <input {...rest}/>
    )
}

export default TextInput;