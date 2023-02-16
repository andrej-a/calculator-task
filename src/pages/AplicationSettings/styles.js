import styled from 'styled-components';

import size from '@/constants/sizes';

const { tablet, mobileL } = size;

export const SettingsWrapper = styled.div `
    position: ${props => props.theme.position.relative};

    display: flex;
    flex-direction: column;
    width: ${props => props.theme.widthOptions.fullScreen};
    max-width: ${props => props.theme.widthOptions.desktop};
    height: ${props => props.theme.heightOptions.autoHeight};
    min-height: ${props => props.theme.heightOptions.laptop};

    background: ${props => props.theme.MAIN_BACKGROUND_COLOR};

    @media (max-width: ${tablet}) {
        min-height: ${props => props.theme.heightOptions.minHeightTurnOff};
        height: ${props => props.theme.heightOptions.settingsTablet};
    }

    @media (max-width: ${mobileL}) {
        height: ${props => props.theme.heightOptions.settingsMobileL};
    }
`;
export const TitleWrapper = styled.div `

    display: flex;
    justify-content: center;
    width: ${props => props.theme.widthOptions.settingsTitle};
    height: ${props => props.theme.heightOptions.settingsTitle};

    align-items: ${props => props.theme.aligntItems.center};

    @media (max-width: ${ mobileL }) {
        width: ${props => props.theme.widthOptions.fullScreen};
    }

`;
export const Title = styled.h2 `

    font-size: ${props => props.theme.fontSize.desktop};
    color: ${props => props.theme.FONT_COLOR};

    @media (max-width: ${ mobileL }) {
        font-size: ${props => props.theme.fontSize.mobileL};
    }
`;
export const LabelWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: ${props => props.theme.aligntItems.center};
    width: ${props => props.theme.widthOptions.settingsLabel};
    height: ${props => props.theme.heightOptions.settingsLabel};

    label {
        font-size: ${props => props.theme.fontSize.label};
        font-weight: ${props => props.theme.fontWeight.default};
        color: ${props => props.theme.FONT_COLOR};
    }

    @media (max-width: ${ mobileL }) {
        padding-left: ${props => props.theme.padding.labelLeft};

        justify-content: flex-start;
    }
`;

export const ClearHistoryButton = styled.button `
    position: ${props => props.theme.position.absolute};
    z-index: ${props => props.theme.zIndex.minimal};

    width: ${props => props.theme.widthOptions.clearHistoryButton};
    height: ${props => props.theme.heightOptions.clearHistoryButton};
    margin-top: ${props => props.theme.margin.clearHistoryButtonTop};
    margin-left: ${props => props.theme.margin.clearHistoryButtonLeft};
    padding-left: ${props => props.theme.padding.clearHistoryButtonLeft};

    border: ${props => `${props.theme.border.clearHistoryButton} ${props.theme.SECOND_BORDER_COLOR}`};
    border-radius: ${props => props.theme.borderRadius.clearHistoryButton};

    background: ${props => props.theme.BUTTON_BACKGROUND_COLOR};
    cursor: ${props => props.theme.cursor.pointer};
    text-align:  ${props => props.theme.textAlign.left};
    font-size: ${props => props.theme.fontSize.clearHistoryButton};
    font-weight: ${props => props.theme.fontWeight.default};
    color: ${props => props.theme.CLEAR_HISTORY_BUTTON_COLOR};

    &:hover {
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }

    &:disabled {
        cursor: ${props => props.theme.cursor.noToday};
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    @media(max-width: ${ mobileL }) {
        left: ${props => props.theme.left.clearHistoryButton};

        width: ${props => props.theme.widthOptions.clearHistoryButtonMobile};
        height: ${props => props.theme.heightOptions.clearHistoryButtonMobile};
        margin-left: ${props => props.theme.margin.noLeft};
        margin-top: ${props => props.theme.margin.clearHistoryButtonTopMobile};
        padding-left: ${props => props.theme.padding.noLeft};

        font-size: ${props => props.theme.fontSize.label};
        text-align: ${props => props.theme.textAlign.center};
    }
`;
