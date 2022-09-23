import styled from 'styled-components';
import backImage from './images/pattern.png';

export const Background = styled.div`
    display:flex;
    justify-content: center;
    background-image: url(${backImage});
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
`;

export const Container = styled.div `
    background-color: #eaeaea;
    text-align: center;
    display:flex;
    flex:1;
    height: 100vh;
    flex-direction: column;
    padding: 0 1rem;
    overflow:hidden;
    max-width: 30rem;

    p {
        
        font-size: 2.5rem;
        display: flex;
        align-self: center;
        align-items: center;
        margin-bottom: 1rem;
    }

    p img {
        width: 8rem;
        border: 3px solid black;
        padding: 0.5rem;
        border-radius: 8px;
        background-color: #33363b;
        margin-left: 1rem;
    }
    .by {
        margin-top: 0rem;
        font-size: 1rem;
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

export const Options = styled.div`
    display: grid;
    grid-auto-flow: column;
    margin: 1rem 0;
    grid-gap: 1rem;
    grid-auto-columns: minmax(0, 1fr);

    button {
        padding: 0.5rem;
        border-radius:8px
    }
    img {
        width: 2.5rem;
    }
`;
