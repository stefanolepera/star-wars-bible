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
        width: 340px;
    }

    @media ${device.mobileL} {
        width: 405px;
    }

    @media ${device.tablet} {
        width: 600px;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px maroon;
    }
`;
