import styled from 'styled-components';

import size from '@/constants/sizes';

const { tablet, mobileL } = size;

export const SettingsWrapper = styled.div `
    position: ${({ theme: { position } }) => position.relative};

    display: flex;
    flex-direction: column;
    width: ${({ theme: { widthOptions } }) => widthOptions.fullScreen};
    max-width: ${({ theme: { widthOptions } }) => widthOptions.desktop};
    height: ${({ theme: { heightOptions } }) => heightOptions.autoHeight};
    min-height: ${({ theme: { heightOptions } }) => heightOptions.laptop};

    background: ${({ theme: { MAIN_BACKGROUND_COLOR } }) => MAIN_BACKGROUND_COLOR};

    @media (max-width: ${tablet}) {
        min-height: ${({ theme: { heightOptions } }) => heightOptions.minHeightTurnOff};
        height: ${({ theme: { heightOptions } }) => heightOptions.settingsTablet};
    }

    @media (max-width: ${mobileL}) {
        height: ${({ theme: { heightOptions } }) => heightOptions.settingsMobileL};
    }
`;
export const TitleWrapper = styled.div `

    display: flex;
    justify-content: center;
    width: ${({ theme: { widthOptions } }) => widthOptions.settingsTitle};
    height: ${({ theme: { heightOptions } }) => heightOptions.settingsTitle};

    align-items: ${({ theme: { aligntItems } }) => aligntItems.center};

    @media (max-width: ${ mobileL }) {
        width: ${({ theme: { widthOptions } }) => widthOptions.fullScreen};
    }

`;
export const Title = styled.h2 `

    font-size: ${({ theme: { fontSize } }) => fontSize.desktop};
    color: ${({ theme: { FONT_COLOR } }) => FONT_COLOR};

    @media (max-width: ${ mobileL }) {
        font-size: ${({ theme: { fontSize } }) => fontSize.mobileL};
    }
`;
export const LabelWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: ${({ theme: { aligntItems } }) => aligntItems.center};
    width: ${({ theme: { widthOptions } }) => widthOptions.settingsLabel};
    height: ${({ theme: { heightOptions } }) => heightOptions.settingsLabel};

    label {
        font-size: ${({ theme: { fontSize } }) => fontSize.label};
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.default};
        color: ${({ theme: { FONT_COLOR } }) => FONT_COLOR};
    }

    @media (max-width: ${ mobileL }) {
        padding-left: ${({ theme: { padding } }) => padding.labelLeft};

        justify-content: flex-start;
    }
`;

export const ClearHistoryButton = styled.button `
    position: ${({ theme: { position } }) => position.absolute};
    z-index: ${({ theme: { zIndex } }) => zIndex.minimal};

    width: ${({ theme: { widthOptions } }) => widthOptions.settingsPageElements};
    height: ${({ theme: { heightOptions } }) => heightOptions.settingsPageElements};
    margin-top: ${({ theme: { margin } }) => margin.clearHistoryButtonTop};
    margin-left: ${({ theme: { margin } }) => margin.settingsPageElements};
    padding-left: ${({ theme: { padding } }) => padding.settingsPageElementsLeft};

    border: ${({ theme: { border, SECOND_BORDER_COLOR }}) => `${ border.settingsPageElements } ${ SECOND_BORDER_COLOR }`};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.settingsPageElements};

    background: ${({ theme: { BUTTON_BACKGROUND_COLOR } }) => BUTTON_BACKGROUND_COLOR};
    cursor: ${({ theme: { cursor } }) => cursor.pointer};
    text-align:  ${({ theme: { textAlign } }) => textAlign.left};
    font-size: ${({ theme: { fontSize } }) => fontSize.settingsPageElements};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.default};
    color: ${({ theme: { CLEAR_HISTORY_BUTTON_COLOR } }) => CLEAR_HISTORY_BUTTON_COLOR};

    &:hover {
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }

    &:disabled {
        cursor: ${({ theme: { cursor } }) => cursor.noToday};
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    @media(max-width: ${ mobileL }) {
        left: ${({ theme: { left } }) => left.clearHistoryButton};

        width: ${({ theme: { widthOptions } }) => widthOptions.clearHistoryButtonMobile};
        height: ${({ theme: { heightOptions } }) => heightOptions.settingsPageElementsMobile};
        margin-left: ${({ theme: { margin } }) => margin.noLeft};
        margin-top: ${({ theme: { margin } }) => margin.clearHistoryButtonTopMobile};
        padding-left: ${({ theme: { padding } }) => padding.noLeft};

        font-size: ${({ theme: { fontSize } }) => fontSize.label};
        text-align: ${({ theme: { textAlign } }) => textAlign.center};
    }
`;
