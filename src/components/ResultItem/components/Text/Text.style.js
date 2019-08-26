import styled from 'styled-components';
import { device } from '../../../../constants/Devices';

export const StyledText = styled.div`
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