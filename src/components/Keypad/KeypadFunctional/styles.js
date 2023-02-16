import styled from 'styled-components';

import size from '@/constants/sizes';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    width: ${props => props.theme.widthOptions.fullScreen};
    height: ${props => props.theme.heightOptions.autoHeight};
    max-height: ${props => props.theme.heightOptions.ihnerit};
    gap: ${props => props.theme.gap.keypad};
    padding-left: ${props => props.theme.padding.keypadLeft};
    margin-top: ${props => props.theme.margin.keypadTop};

    @media (max-width: ${size.tablet}) {
        padding: ${props => props.theme.padding.keypad};
    }

    @media (max-width: ${size.mobileL}) {
        align-items: center;

        gap: ${props => props.theme.gap.keypadMobileL};
        padding: ${props => props.theme.padding.keypadMobileL};
        margin-bottom: ${props => props.theme.margin.keypadBottomMobileL};
    }
`;
export const Key = styled.button`
    width: ${props => props.theme.widthOptions.key};
    height: ${props => props.theme.heightOptions.key};
    border-radius: ${props => props.theme.borderRadius.key};

    background: ${props => props.theme.BUTTON_BACKGROUND_COLOR};
    cursor: ${props => props.theme.cursor.pointer};
    font-size: ${props => props.theme.fontSize.desktop};
    color: ${props => props.theme.BUTTON_COLOR};
    transition: ${props => props.theme.transition.default};

    &:hover {
        background: ${props => props.theme.background.darkGrey};
        color: ${props => props.theme.color.white};
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }

    &:disabled {
        background: ${props => props.theme.BUTTON_BACKGROUND_COLOR};
        color: ${props => props.theme.BUTTON_COLOR};
        cursor: ${props => props.theme.cursor.noToday};
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    @media (max-width: ${size.laptop}) {
        width: ${props => props.theme.widthOptions.keyLaptop};
    }

    @media (max-width: ${size.tablet}) {
        width: ${props => props.theme.widthOptions.keyTablet};
        font-size: ${props => props.theme.fontSize.mobileL};
    }

    @media (max-width: ${size.mobileL}) {
        width: ${props => props.theme.widthOptions.keyMobileL};
        height: ${props => props.theme.heightOptions.keyMobileL};
        font-size: ${props => props.theme.fontSize.settingsPageElements};
    }
`;
