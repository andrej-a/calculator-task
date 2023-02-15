import styled from 'styled-components';

import size from '@/constants/sizes';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    width: ${props => props.theme.widthOptions.width};
    height: auto;
    max-height: inherit;
    gap: 15px;
    padding-left: 5%;
    margin-top: 20px;

    @media (max-width: ${size.tablet}) {
        padding: 20px;
        padding-top: 0px;
    }

    @media (max-width: ${size.mobileL}) {
        gap: 0;
        padding: 0 20px 0 20px;
        align-items: center;
        margin-bottom: 10px;
    }
`;
export const Key = styled.button`
    width: 18%;
    height: 125px;
    border-radius: 0;

    background: ${props => props.theme.BUTTON_BACKGROUND_COLOR} 0% 0% no-repeat padding-box;
    cursor: pointer;
    font: normal normal normal 64px/77px Helvetica Neue;
    letter-spacing: 0px;
    color: ${props => props.theme.BUTTON_COLOR};
    transition: all 0.3s ease;

    &:hover {
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }

    @media (max-width: ${size.laptop}) {
        width: 17%;
    }

    @media (max-width: ${size.tablet}) {
        width: 16%;
        font: normal normal normal 64px/109px Helvetica Neue;
    }

    @media (max-width: ${size.mobileL}) {
        width: 20%;
        height: 20%;

        font-size: 32px;
    }
`;
