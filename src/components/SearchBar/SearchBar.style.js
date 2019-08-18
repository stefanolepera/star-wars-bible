import styled from 'styled-components';

export const Input = styled.input`
    border: none;
    padding: 0 10px;
    margin: 0 auto;
    font-size: 1.2em;
    width: 600px;
    height: 40px;
    color: #000;
    background: #ccc;
    border-radius: 4px;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px maroon;
    }
`;
