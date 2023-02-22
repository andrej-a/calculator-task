import styled from 'styled-components';

import size from '@/constants/sizes';

const { tablet, mobileL } = size;

export const SettingsWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    max-width: ${({ theme: { widthOptions } }) => widthOptions[1920]}px;
    height: auto;
    min-height: ${({ theme: { heightOptions } }) => heightOptions[960]}px;

    background: ${({ theme: { MAIN_BACKGROUND_COLOR } }) => MAIN_BACKGROUND_COLOR};

    @media (max-width: ${tablet}) {
        min-height: ${({ theme: { heightOptions } }) => heightOptions[0]}px;
        height: ${({ theme: { heightOptions } }) => heightOptions[840]}px;
    }

    @media (max-width: ${mobileL}) {
        height: ${({ theme: { heightOptions } }) => heightOptions[670]}px;
    }
`;
export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: ${({ theme: { widthOptions } }) => widthOptions[500]}px;
    height: ${({ theme: { heightOptions } }) => heightOptions[100]}px;

    align-items: center;

    @media (max-width: ${mobileL}) {
        width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    }
`;
export const Title = styled.h2`
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    color: ${({ theme: { FONT_COLOR } }) => FONT_COLOR};

    @media (max-width: ${mobileL}) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    }
`;
export const LabelWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ theme: { widthOptions } }) => widthOptions[355]}px;
    height: ${({ theme: { heightOptions } }) => heightOptions[55]}px;

    label {
        font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight[700]};
        color: ${({ theme: { FONT_COLOR } }) => FONT_COLOR};
    }

    @media (max-width: ${mobileL}) {
        padding-left: ${({ theme: { padding } }) => padding[30]}px;

        justify-content: flex-start;
    }
`;

export const ClearHistoryButton = styled.button`
    position: absolute;
    z-index: ${({ theme: { zIndex } }) => zIndex[0]};

    width: ${({ theme: { widthOptions } }) => widthOptions[400]}px;
    height: ${({ theme: { heightOptions } }) => heightOptions[90]}px;
    margin-top: ${({ theme: { margin } }) => margin[475]}px;
    margin-left: ${({ theme: { margin } }) => margin[90]}px;
    padding-left: ${({ theme: { padding } }) => padding[20]}px;

    border: ${({ theme: { border, SECOND_BORDER_COLOR } }) => `${border.default} ${SECOND_BORDER_COLOR}`};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.default};

    background: ${({ theme: { BUTTON_BACKGROUND_COLOR } }) => BUTTON_BACKGROUND_COLOR};
    cursor: pointer;
    text-align: left;
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight[700]};
    color: ${({ theme: { CLEAR_HISTORY_BUTTON_COLOR } }) => CLEAR_HISTORY_BUTTON_COLOR};

    &:hover {
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }

    &:disabled {
        cursor: not-allowed;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    @media (max-width: ${mobileL}) {
        left: ${({ theme: { left } }) => left.clearHistoryButton};

        width: ${({ theme: { widthOptions } }) => widthOptions[250]}px;
        height: ${({ theme: { heightOptions } }) => heightOptions[50]}px;
        margin-left: ${({ theme: { margin } }) => margin[0]};
        margin-top: ${({ theme: { margin } }) => margin[390]}px;
        padding-left: ${({ theme: { padding } }) => padding[0]};

        font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
        text-align: center;
    }
`;
