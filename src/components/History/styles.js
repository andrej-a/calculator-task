import styled from 'styled-components';

import { NO_INDENT, SET_INDENT } from '@/constants';
import size from '@/constants/sizes';

const { tablet, mobileL } = size;

export const HistoryWrapper = styled.div`
    display: ${({ showHistory }) => showHistory ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;

    width: ${({ theme: { widthOptions }}) => widthOptions.history};
    max-height: ${({ theme: { heightOptions }}) => heightOptions.laptop};

    border-left: ${({ theme: { border }}) => border.wrappers};

    @media (max-width: ${ tablet }) {
        position: ${({ theme: { position }}) => position.absolute};
        z-index: ${({ theme: { zIndex }}) => zIndex.stronger};
        left: ${({ showHistory }) => showHistory ? NO_INDENT : SET_INDENT};

        width: ${({ theme: { widthOptions }}) => widthOptions.fullScreen};
        height: ${({ theme: { heightOptions }}) => heightOptions.historyTablet};
        background: ${({ theme: { MAIN_BACKGROUND_COLOR }}) => MAIN_BACKGROUND_COLOR};
        border-left: ${({ theme: { border }}) => border.noBorder};
    }

    @media (max-width: ${ mobileL }) {
        height: ${({ theme: { heightOptions }}) => heightOptions.historyMobileL};
    }
`;


export const TitleWrapper = styled.div`
    width: ${({ theme: { widthOptions }}) => widthOptions.autoWidth};
    height: ${({ theme: { heightOptions }}) => heightOptions.autoHeight};
    margin: ${({ theme: { margin }}) => margin.historyTitle};
`;

export const Title = styled.h2`
    color: ${({ theme: { FONT_COLOR }}) => FONT_COLOR};
    font-size: ${({ theme: { fontSize }}) => fontSize.settingsPageElements};
    font-weight: ${({ theme: { fontWeight }}) => fontWeight.default};
    text-align: ${({ theme: { textAlign }}) => textAlign.center};
`;

export const ItemsWrapper = styled.div`
    width: ${({ theme: { widthOptions }}) => widthOptions.fullScreen};
    max-height: ${({ theme: { heightOptions }}) => heightOptions.ihnerit};
    overflow-y: scroll;
    overflow-x: auto;

    display: flex;
    flex-direction: column;
`;
export const HistoryItemWrapper = styled.div`
    margin-left: ${({ theme: { margin }}) => margin.historyItemsLeft};
`;
export const HistoryItem = styled.p`
    margin-bottom: ${({ theme: { margin }}) => margin.historyItemBottom};

    font-size: ${({ theme: { fontSize }}) => fontSize.settingsPageElements};
    font-weight: ${({ theme: { fontWeight }}) => fontWeight.default};
    color: ${({ theme: { FONT_COLOR }}) => FONT_COLOR};
`;
