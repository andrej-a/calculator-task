import styled from 'styled-components';

import size from '@/constants/sizes';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    width: 100%;
    height: auto;
    max-height: inherit;
    row-gap: 45px;
    column-gap: 128px;
    padding: 32px 20px 32px 130px;

    @media (max-width: ${size.desktop}) {
        gap: 10px;
        padding: 0;
        padding-left: 5%;
        margin-bottom: 5%;
    }

    @media (max-width: ${size.tablet}) {
        padding: 20px;
    }

    @media (max-width: ${size.mobileL}) {
        gap: 0;
        padding: 0 20px 0 20px;
        align-items: center;
    }
`;
export const Key = styled.button`
    width: 150px;
    height: 150px;
    border: 1px solid ${props => props.theme.BORDER_COLOR};

    background: ${props => props.theme.BUTTON_BACKGROUND_COLOR} 0% 0% no-repeat padding-box;
    border-radius: 32px;
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

    @media (max-width: ${size.desktop}) {
        width: 18%;

        border-radius: 0;
    }

    @media (max-width: ${size.tablet}) {
        font: normal normal normal 64px/109px Helvetica Neue;
    }

    @media (max-width: ${size.mobileL}) {
        width: 20%;
        height: 25%;

        font-size: 32px;
    }
`;
