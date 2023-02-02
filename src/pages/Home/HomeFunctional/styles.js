import styled from 'styled-components';

import { size } from '@/constants/sizes';

export const HomeWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: auto;
    background: ${props => props.theme.MAIN_BACKGROUND_COLOR};
    display: flex;
`;
export const DisplayKeypadWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${size.tablet}) {
        width: 100%;
        height: 100%;
    }
`;
