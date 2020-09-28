import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    padding: 0.5rem 0rem;
    font-size: 2.5rem;
    border-bottom: 1px solid #32264D;
    

    img {
        width: 2rem;
        margin-right: 1rem;
    }

    p {
        font-size: 2.5rem;
        margin:0;
        text-align: left;
        word-break: break-all;
    }

    .checked {
        text-decoration: line-through;
        color: #6A6180;
    }

`;

export default Container;