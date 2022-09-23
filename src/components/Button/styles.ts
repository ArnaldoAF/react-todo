import styled from 'styled-components';

const ButtonStyle = styled.button`
    border: 1px solid #E6E6F0;
    border-radius: 0px 8px 8px 0px;
    box-sizing: border-box;
    background: #04D361;
    cursor:pointer;
    outline: none;

    &:disabled {
        background: #DCDCE6;
    }
`;

export default ButtonStyle;