import styled from 'styled-components';
import { device } from '../../constants/Devices';

export const Input = styled.input`
    border: none;
    padding: 0 10px;
    margin: 0 auto;
    font-size: 1.2em;
    height: 40px;
    color: #000;
    background: #ccc;
    border-radius: 4px;

    @media ${device.mobileS} {
        width: 295px;
    }

    @media ${device.mobileM} {
        width: 350px;
    }

    @media ${device.mobileL} {
        width: 400px;
    }

    @media ${device.tablet} {
        width: 600px;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px maroon;
    }
`;
