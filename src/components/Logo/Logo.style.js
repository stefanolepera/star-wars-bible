import styled from 'styled-components';
import { device } from '../../utils/Devices';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;

    @media ${device.mobileS} {
        flex-direction: column;
    }

    @media ${device.tablet} {
        flex-direction: row;
    }
`;