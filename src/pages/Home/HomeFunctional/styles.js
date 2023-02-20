import styled from 'styled-components';

import size from '@/constants/sizes';

const { tablet } = size;

export const HomeWrapper = styled.div`
    display: flex;

    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    max-width: ${({ theme: { widthOptions } }) => widthOptions[1920]}px;
    height: auto;
    max-height: ${({ theme: { heightOptions } }) => heightOptions[960]}px;

    overflow: ${({ theme: { overflowOptions } }) => overflowOptions.autoOverflow};
    background: ${({ theme: { MAIN_BACKGROUND_COLOR } }) => MAIN_BACKGROUND_COLOR};
`;

export const DisplayKeypadWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;

    @media (max-width: ${tablet}) {
        height: ${({ theme: { heightOptions } }) => heightOptions[100]}%;
    }
`;
