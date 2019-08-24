import styled from 'styled-components';
import { device } from '../../constants/Devices';

export const MainWrapper = styled.div`
    margin: 0 auto;
    background: #ccc;
    border-radius: 4px;

    @media ${device.mobileS} {
        max-width: 360px;
    }

    @media ${device.mobileL} {
        max-width: 425px;
    }

    @media ${device.tablet} {
        max-width: 620px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
`;