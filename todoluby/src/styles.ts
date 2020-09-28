import styled from 'styled-components';

export const Container = styled.div `
    background-color: #E5E5E5;
    text-align: center;
    display:flex;
    flex:1;
    height: 100vh;
    flex-direction: column;
    padding: 0 1rem;
    overflow:hidden;

    h1 {
        text-align: center;
    }
    
    .enter-icon {
        width: 1.8rem;
    }

`;

export const Form = styled.form`
    display:flex;
    input {
        flex:5;
    }
    button {
        flex:1;
        padding-top: 5px;
    }
`;

export const TaskList = styled.div`
    display:flex;
    flex-direction: column;
    overflow:auto
`;
