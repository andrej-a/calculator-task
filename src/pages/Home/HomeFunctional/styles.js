import styled from 'styled-components';

import size from '@/constants/sizes';

const {tablet} = size;

export const HomeWrapper = styled.div`
    display: flex;

    width: ${props => props.theme.widthOptions.fullScreen};
    max-width: ${props => props.theme.widthOptions.desktop};
    height: ${props => props.theme.heightOptions.autoHeight};
    max-height: ${props => props.theme.heightOptions.laptop};

    overflow: ${props => props.theme.overflowOptions.autoOverflow};
    background: ${props => props.theme.MAIN_BACKGROUND_COLOR};
`;

export const DisplayKeypadWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: ${props => props.theme.widthOptions.fullScreen};

    @media (max-width: ${tablet}) {
        height: ${props => props.theme.heightOptions.fullScreen};
    }
`;
