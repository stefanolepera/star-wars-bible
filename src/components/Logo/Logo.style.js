import styled from 'styled-components';
import { device } from '../../constants/Devices';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
`;

export const Icon = styled.img`
    @media ${device.mobileS} {
        width: 150px;
    }

    @media ${device.mobileM} {
        width: 160px;
    }

    @media ${device.mobileL} {
        width: 200px;
    }

    @media ${device.tablet} {
        width: 320px
    }
`;