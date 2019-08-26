import styled from 'styled-components';
import { device } from '../../constants/Devices';

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;

    @media ${device.mobileS} {
        max-width: 295px;
    }

    @media ${device.mobileM} {
        max-width: 350px;
    }

    @media ${device.mobileL} {
        max-width: 400px;
    }

    @media ${device.tablet} {
        max-width: 600px;
    }
`;