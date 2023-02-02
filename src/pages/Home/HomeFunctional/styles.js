import styled from 'styled-components';

import { size } from '@/constants/sizes';

export const HomeWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    overflow: auto;
    background: ${props => props.theme.MAIN_BACKGROUND_COLOR};
`;
export const DisplayKeypadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    @media (max-width: ${size.tablet}) {
        width: 100%;
        height: 100%;
    }
`;
