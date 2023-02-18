import styled from 'styled-components';

import size from '@/constants/sizes';

const {tablet} = size;

export const HomeWrapper = styled.div`
    display: flex;

    width: ${({ theme: { widthOptions } }) => widthOptions.fullScreen};
    max-width: ${({ theme: { widthOptions } }) => widthOptions.desktop};
    height: ${({ theme: { heightOptions } }) => heightOptions.autoHeight};
    max-height: ${({ theme: { heightOptions } }) => heightOptions.laptop};

    overflow: ${({ theme: { overflowOptions } }) => overflowOptions.autoOverflow};
    background: ${({ theme: { MAIN_BACKGROUND_COLOR } }) => MAIN_BACKGROUND_COLOR};
`;

export const DisplayKeypadWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: ${({ theme: { widthOptions } }) => widthOptions.fullScreen};

    @media (max-width: ${tablet}) {
        height: ${({ theme: { heightOptions } }) => heightOptions.fullScreen};
    }
`;
