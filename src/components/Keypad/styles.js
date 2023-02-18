import styled from 'styled-components';

import size from '@/constants/sizes';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    width: ${({ theme: { widthOptions }}) => widthOptions.fullScreen};
    height: ${({ theme: { heightOptions }}) => heightOptions.autoHeight};
    max-height: ${({ theme: { heightOptions }}) => heightOptions.ihnerit};
    gap: ${({ theme: { gap }}) => gap.keypad};
    padding-left: ${({ theme: { padding }}) => padding.keypadLeft};
    margin-top: ${({ theme: { margin }}) => margin.keypadTop};

    @media (max-width: ${size.tablet}) {
        padding: ${({ theme: { padding }}) => padding.keypad};
    }

    @media (max-width: ${size.mobileL}) {
        align-items: center;

        gap: ${({ theme: { gap }}) => gap.keypadMobileL};
        padding: ${({ theme: { padding }}) => padding.keypadMobileL};
        margin-bottom: ${({ theme: { margin }}) => margin.keypadBottomMobileL};
    }
`;
export const Key = styled.button`
    width: ${({ theme: { widthOptions }}) => widthOptions.key};
    height: ${({ theme: { heightOptions }}) => heightOptions.key};
    border-radius: ${({ theme: { borderRadius }}) => borderRadius.key};

    background: ${({ theme: { BUTTON_BACKGROUND_COLOR }}) => BUTTON_BACKGROUND_COLOR};
    cursor: ${({ theme: { cursor }}) => cursor.pointer};
    font-size: ${({ theme: { fontSize }}) => fontSize.desktop};
    color: ${({ theme: { BUTTON_COLOR }}) => BUTTON_COLOR};
    transition: ${({ theme: { transition }}) => transition.default};

    &:hover {
        background: ${({ theme: { background }}) => background.darkGrey};
        color: ${({ theme: { color }}) => color.white};
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }

    &:disabled {
        background: ${({ theme: { BUTTON_BACKGROUND_COLOR }}) => BUTTON_BACKGROUND_COLOR};
        color: ${({ theme: { BUTTON_COLOR }}) => BUTTON_COLOR};
        cursor: ${({ theme: { cursor }}) => cursor.noToday};
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    @media (max-width: ${size.laptop}) {
        width: ${({ theme: { widthOptions }}) => widthOptions.keyLaptop};
    }

    @media (max-width: ${size.tablet}) {
        width: ${({ theme: { widthOptions }}) => widthOptions.keyTablet};
        font-size: ${({ theme: { fontSize }}) => fontSize.mobileL};
    }

    @media (max-width: ${size.mobileL}) {
        width: ${({ theme: { widthOptions }}) => widthOptions.keyMobileL};
        height: ${({ theme: { heightOptions }}) => heightOptions.keyMobileL};
        font-size: ${({ theme: { fontSize }}) => fontSize.settingsPageElements};
    }
`;
