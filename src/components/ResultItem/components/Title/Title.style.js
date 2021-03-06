import styled from 'styled-components';
import { device } from '../../../../constants/Devices';

export const StyledTitle = styled.h2`
    text-align: center;
    color: maroon;
    padding-top: 15px;

    @media ${device.mobileS} {
        font-size: 1em;
    }

    @media ${device.mobileM} {
        font-size: 1.2em;
    }

    @media ${device.mobileL} {
        font-size: 1.4em;
    }

    @media ${device.tablet} {
        font-size: 1.6em;
    }
`;