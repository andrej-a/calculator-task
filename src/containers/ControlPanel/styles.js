import styled from "styled-components";

import size from "@/constants/sizes";

const {tablet} = size;
export const ControlPanelWrapper = styled.div `
    width: 100%;
    height: auto;
    min-height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: ${tablet}) {
        display: none;
    }
`;

export const ToggleHistoryButton = styled.button`
    padding: 10px;

    background: ${props => props.theme.BUTTON_BACKGROUND_COLOR} 0% 0% no-repeat padding-box;
    cursor: pointer;
    font: normal normal normal 32px/32px Helvetica Neue;
    letter-spacing: 0px;
    color: ${props => props.theme.BUTTON_COLOR};
    transition: all 0.3s ease;

    &:hover {
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }
`;
