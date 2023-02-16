import styled from 'styled-components';

import size from '@/constants/sizes';

const { tablet, mobileL } = size;

export const SettingsWrapper = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;

    width: ${props => props.theme.widthOptions.width};
    max-width: ${props => props.theme.widthOptions.maxWidth};
    height: auto;
    min-height: 960px;

    background: ${props => props.theme.MAIN_BACKGROUND_COLOR};

    @media (max-width: ${tablet}) {
        min-height: 0;
        height: 840px;
    }

    @media (max-width: ${mobileL}) {
        height: 670px;
    }
`;
export const TitleWrapper = styled.div `

    width: 500px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${ mobileL }) {
        width: 100%;
    }

`;
export const Title = styled.h2 `
    font-size: 64px;
    line-height: 77px;
    letter-spacing: 0px;
    font-weight: 700;
    color: ${props => props.theme.FONT_COLOR};

    @media (max-width: ${ mobileL }) {
        font-size: 46px;
    }
`;
export const LabelWrapper = styled.div `
    width: 355px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
        font-size: 24px;
        line-height: 29px;
        font-weight: 700;
        color: ${props => props.theme.FONT_COLOR};
    }

    @media (max-width: ${ mobileL }) {
        padding-left: 30px;
        justify-content: flex-start;
    }
`;
export const ClearHistoryButton = styled.button `
    position: absolute;
    z-index: 0;

    width: ${props => props.theme.widthOptions.clearHistoryButton};
    height: 93px;
    margin-top: 475px;
    margin-left: 91px;
    padding-left: 20px;
    border: 2px solid ${props => props.theme.SECOND_BORDER_COLOR};
    border-radius: 8px;

    background: ${props => props.theme.BUTTON_BACKGROUND_COLOR} 0% 0% no-repeat padding-box;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    font-size: 32px;
    letter-spacing: 0px;
    font-weight: 700;
    color: ${props => props.theme.CLEAR_HISTORY_BUTTON_COLOR};

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

    @media(max-width: ${ mobileL }) {
        left: calc(50% - 125px);

        width: 250px;
        height: 50px;
        margin-left: 0px;
        margin-top: 390px;
        padding-left: 0;

        font-size: 23px;
        text-align: center;
    }
`;
