import styled from 'styled-components';
import { device } from '../../../../constants/Devices';

export const Item = styled.button`
    margin: 0 2px;
    border-radius: 4px;

    font-weight: 600;
    padding: 8px 8px;
    text-align: center;
    cursor: pointer;

    background: ${props => props.disabled ? "maroon" : "#ccc"};
    color: ${props => props.disabled ? "#ccc" : "maroon"};

    @media ${device.mobileS} {
        font-size: 0.6em;
    }

    @media ${device.mobileM} {
        font-size: 0.7em;
    }

    @media ${device.mobileL} {
        font-size: 0.8em;
    }

    @media ${device.tablet} {
        font-size: 1.1em;
    }

    :hover {
        background: maroon;
        color: #ccc;
    }
`;