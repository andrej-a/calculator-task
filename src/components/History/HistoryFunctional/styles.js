import styled from 'styled-components';

import { NO_INDENT, SET_INDENT } from '@/constants';
import size from '@/constants/sizes';

const { desktop, tablet } = size;

export const HistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 20%;
    max-height: 1150px;

    @media (max-width: ${ desktop }) {
        max-height: 980px;
    }

    @media (max-width: ${ tablet }) {
        position: absolute;
        z-index: 2;
        left: ${props => props.showHistory ? NO_INDENT : SET_INDENT};

        width: 100%;
        max-height: 1500px;
        height: 1500px;
        background: ${props => props.theme.MAIN_BACKGROUND_COLOR};
    }
`;


export const TitleWrapper = styled.div`
    width: auto;
    height: auto;
    margin: 32px 32px;
`;

export const Title = styled.h2`
    color: ${props => props.theme.FONT_COLOR};
    letter-spacing: 0px;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
`;

export const ItemsWrapper = styled.div`
    width: 100%;
    max-height: inherit;
    overflow-y: scroll;
    overflow-x: auto;

    display: flex;
    flex-direction: column;
`;
export const HistoryItemWrapper = styled.div`
    margin-left: 32px;
`;
export const HistoryItem = styled.p`
    margin-bottom: 32px;

    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0px;
    color: ${props => props.theme.FONT_COLOR};
`;
export const Border = styled.div`
    width: 2px;
    min-height: 910px;
    margin-top: 25px;
    margin-bottom: 25px;

    background: ${props => props.theme.BORDER_COLOR};

    @media (max-width: ${ tablet }) {
        display: none;
    }
`;
