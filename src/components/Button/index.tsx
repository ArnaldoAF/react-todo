import React, { ButtonHTMLAttributes} from 'react';
import ButtonStyle from './styles';


const Button:React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const {children, ...rest}  = props

    return (
        <ButtonStyle 
            {...rest}
        >
            {children}
        </ButtonStyle>
    )
}

export default Button;