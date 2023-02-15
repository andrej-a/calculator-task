import styled from 'styled-components';

import size from '@/constants/sizes';

const {tablet} = size;

export const HomeWrapper = styled.div`
    display: flex;
    width: ${props => props.theme.widthOptions.width};
    max-width: ${props => props.theme.widthOptions.maxWidth};
    height: auto;
    max-height: 960px;
    overflow: auto;
    background: ${props => props.theme.MAIN_BACKGROUND_COLOR};
`;

export const DisplayKeypadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    @media (max-width: ${tablet}) {
        width: 100%;
        height: 100%;
    }
`;
