import styled from 'styled-components'

import { size } from '@/constants/sizes'

export const SettingsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100vh;
    background: ${props => props.theme.MAIN_BACKGROUND_COLOR};
    display: flex;
    flex-direction: column;

    @media (max-width: ${size.mobileL}) {
        align-items: center;
    }
`
export const TitleWrapper = styled.div`
    margin-top: 61px;
    margin-left: 84px;

    @media (max-width: ${size.mobileL}) {
        margin-left: 0;
    }
`
export const Title = styled.h2`
    font-size: 64px;
    line-height: 77px;
    letter-spacing: 0px;
    font-weight: 700;
    color: ${props => props.theme.FONT_COLOR};
`
export const LabelWrapper = styled.div`
    margin-top: 46px;
    margin-left: 94px;

    label {
        font-size: 24px;
        line-height: 29px;
        font-weight: 700;
        color: ${props => props.theme.FONT_COLOR};
    }

    @media (max-width: ${size.mobileL}) {
        margin-left: 0;
    }
`
export const ClearHistoryButton = styled.button`
    position: absolute;
    width: 401px;
    height: 93px;
    margin-top: 342px;
    margin-left: 91px;
    padding-left: 27px;
    background: ${props => props.theme.BUTTON_BACKGROUND_COLOR} 0% 0% no-repeat padding-box;
    border: 2px solid ${props => props.theme.SECOND_BORDER_COLOR};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    z-index: 0;
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

    @media (max-width: ${size.mobileL}) {
        margin-left: 20px;
        padding-left: 10px;
        width: 80%;
    }
`
