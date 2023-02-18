import styled from 'styled-components';

import { NO_INDENT, SET_INDENT } from '@/constants';
import size from '@/constants/sizes';

const { tablet, mobileL } = size;

export const HistoryWrapper = styled.div`
    display: ${props => props.showHistory ? 'flex' : 'none'};;
    flex-direction: column;
    align-items: center;

    width: ${props => props.theme.widthOptions.history};
    max-height: ${props => props.theme.heightOptions.laptop};

    border-left: ${props => props.theme.border.wrappers};

    @media (max-width: ${ tablet }) {
        position: ${props => props.theme.position.absolute};
        z-index: ${props => props.theme.zIndex.stronger};
        left: ${props => props.showHistory ? NO_INDENT : SET_INDENT};

        width: ${props => props.theme.widthOptions.fullScreen};
        height: ${props => props.theme.heightOptions.historyTablet};
        background: ${props => props.theme.MAIN_BACKGROUND_COLOR};
        border-left: ${props => props.theme.border.noBorder};
    }

    @media (max-width: ${ mobileL }) {
        height: ${props => props.theme.heightOptions.historyMobileL};
    }
`;


export const TitleWrapper = styled.div`
    width: ${props => props.theme.widthOptions.autoWidth};
    height: ${props => props.theme.heightOptions.autoHeight};
    margin: ${props => props.theme.margin.historyTitle};
`;

export const Title = styled.h2`
    color: ${props => props.theme.FONT_COLOR};
    font-size: ${props => props.theme.fontSize.settingsPageElements};
    font-weight: ${props => props.theme.fontWeight.default};
    text-align: ${props => props.theme.textAlign.center};
`;

export const ItemsWrapper = styled.div`
    width: ${props => props.theme.widthOptions.fullScreen};
    max-height: ${props => props.theme.heightOptions.ihnerit};
    overflow-y: scroll;
    overflow-x: auto;

    display: flex;
    flex-direction: column;
`;
export const HistoryItemWrapper = styled.div`
    margin-left: ${props => props.theme.margin.historyItemsLeft};
`;
export const HistoryItem = styled.p`
    margin-bottom: ${props => props.theme.margin.historyItemBottom};

    font-size: ${props => props.theme.fontSize.settingsPageElements};
    font-weight: ${props => props.theme.fontWeight.default};
    color: ${props => props.theme.FONT_COLOR};
`;
