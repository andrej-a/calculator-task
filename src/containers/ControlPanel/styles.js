import styled from "styled-components";

import size from "@/constants/sizes";

const {tablet} = size;
export const ControlPanelWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${props => props.theme.widthOptions.fullScreen};
    height: ${props => props.theme.heightOptions.autoHeight};

    @media(max-width: ${tablet}) {
        display: none;
    }
`;

export const ToggleHistoryButton = styled.button`
    padding: ${props => props.theme.padding.toggleHistoryButton};

    background: ${props => props.theme.BUTTON_BACKGROUND_COLOR};
    cursor: ${props => props.theme.cursor.pointer};
    font-size: ${props => props.theme.fontSize.mainPageElements};
    font-weight: ${props => props.theme.fontWeight.default};
    color: ${props => props.theme.BUTTON_COLOR};
    transition: ${props => props.theme.transition.default};

    &:hover {
        background: ${props => props.theme.background.darkGrey};
        color: ${props => props.theme.color.white};
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }
`;
