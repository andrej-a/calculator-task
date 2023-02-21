import styled from 'styled-components';

import { NO_INDENT, SET_INDENT } from '@/constants';
import size from '@/constants/sizes';

const { tablet, mobileL } = size;

export const HistoryWrapper = styled.div`
    display: ${({ showHistory }) => (showHistory ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;

    width: ${({ theme: { widthOptions } }) => widthOptions[40]}%;
    max-height: ${({ theme: { heightOptions } }) => heightOptions[960]}px;

    border-left: ${({ theme: { border } }) => border.default};

    @media (max-width: ${tablet}) {
        position: absolute;
        z-index: ${({ theme: { zIndex } }) => zIndex[2]};
        left: ${({ showHistory }) => (showHistory ? NO_INDENT : SET_INDENT)};

        width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
        height: ${({ theme: { heightOptions } }) => heightOptions[800]}px;
        background: ${({ theme: { MAIN_BACKGROUND_COLOR } }) => MAIN_BACKGROUND_COLOR};
        border-left: ${({ theme: { border } }) => border[0]};
    }

    @media (max-width: ${mobileL}) {
        height: ${({ theme: { heightOptions } }) => heightOptions[670]}px;
    }
`;

export const TitleWrapper = styled.div`
    width: auto;
    height: auto;
    margin: ${({ theme: { margin } }) => margin[32]}px;
`;

export const Title = styled.h2`
    color: ${({ theme: { FONT_COLOR } }) => FONT_COLOR};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight[700]};
    text-align: center;
`;

export const ItemsWrapper = styled.div`
    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    max-height: inherit;
    overflow-y: scroll;
    overflow-x: auto;

    display: flex;
    flex-direction: column;
`;
export const HistoryItemWrapper = styled.div`
    margin-left: ${({ theme: { margin } }) => margin[32]}px;
`;
export const HistoryItem = styled.p`
    margin-bottom: ${({ theme: { margin } }) => margin[32]}px;

    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight[700]};
    color: ${({ theme: { FONT_COLOR } }) => FONT_COLOR};
`;
