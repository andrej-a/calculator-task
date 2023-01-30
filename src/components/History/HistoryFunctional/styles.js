import styled from 'styled-components';

import {
  size
} from '@/constants/sizes';

export const HistoryWrapper = styled.div `
    width: 20%;
    max-height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${size.tablet}) {
        position: absolute;
        z-index: 2;
        width: 100%;
        min-height: 100vh;
        height: auto;
        background: ${(props) => props.theme.MAIN_BACKGROUND_COLOR};
        left: -3600px;
    }

    &.historyActive {
        left: 0;
    }
`;
export const TitleWrapper = styled.div `
    width: auto;
    height: auto;
    margin: 32px 32px;
`;

export const Title = styled.h2 `
    color: ${(props) => props.theme.FONT_COLOR};
    letter-spacing: 0px;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
`;

export const ItemsWrapper = styled.div `
    width: 100%;
    max-height: inherit;
    overflow-y: scroll;
    overflow-x: auto;

    display: flex;
    flex-direction: column;
`;
export const HistoryItemWrapper = styled.div `
    margin-left: 32px;
`;
export const HistoryItem = styled.p `
    margin-bottom: 32px;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0px;
    color: ${(props) => props.theme.FONT_COLOR};
`;
export const Border = styled.div `
    margin-top: 25px;
    margin-bottom: 25px;
    width: 2px;
    min-height: 910px;
    background: ${(props) => props.theme.BORDER_COLOR};

    @media (max-width: ${size.tablet}) {
        display: none;
    }
`;
