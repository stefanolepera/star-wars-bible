import styled from 'styled-components';
import { device } from '../../../../constants/Devices';

export const StyledSubTitle = styled.div`
    font-size: 1.2em;
    font-weight: 500;
    margin: 5px 0;
    text-align: center;
    color: maroon;

    @media ${device.mobileS} {
        font-size: 0.6em;
    }

    @media ${device.mobileM} {
        font-size: 0.8em;
    }

    @media ${device.mobileL} {
        font-size: 1.0em;
    }

    @media ${device.tablet} {
        font-size: 1.2em;
    }
`;