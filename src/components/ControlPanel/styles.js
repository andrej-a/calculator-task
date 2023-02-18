import styled from "styled-components";

import size from "@/constants/sizes";

const {tablet} = size;
export const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ theme: { widthOptions }}) => widthOptions.fullScreen};
    height: ${({ theme: { heightOptions }}) => heightOptions.autoHeight};
    margin-bottom: ${({ theme: { margin }}) => margin.keypadBottomMobileL};;

    @media(max-width: ${tablet}) {
        display: none;
    }
`;

export const ToggleHistoryButton = styled.button`
    padding: ${({ theme: { padding }}) => padding.toggleHistoryButton};

    background: ${({ theme: { BUTTON_BACKGROUND_COLOR }}) => BUTTON_BACKGROUND_COLOR};
    cursor: ${({ theme: { cursor }}) => cursor.pointer};
    font-size: ${({ theme: { fontSize }}) => fontSize.mainPageElements};
    font-weight: ${({ theme: { fontWeight }}) => fontWeight.default};
    color: ${({ theme: { BUTTON_COLOR }}) => BUTTON_COLOR};
    transition: ${({ theme: { transition }}) => transition.default};

    &:hover {
        background: ${({ theme: { background }}) => background.darkGrey};
        color: ${({ theme: { color }}) => color.white};
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }
`;
