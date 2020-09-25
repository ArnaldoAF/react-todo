import React, { ButtonHTMLAttributes} from 'react';


const Button:React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const {children, ...rest}  = props

    return (
        <button 
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button;