import styled from 'styled-components';

import size from '@/constants/sizes';

const { tablet } = size;
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    height: auto;
    margin-bottom: ${({ theme: { margin } }) => margin[10]}px;

    @media (max-width: ${tablet}) {
        display: none;
    }
`;

export const ToggleHistoryButton = styled.button`
    padding: ${({ theme: { padding } }) => padding[10]}px;

    background: ${({ theme: { BUTTON_BACKGROUND_COLOR } }) => BUTTON_BACKGROUND_COLOR};
    cursor: ${({ theme: { cursor } }) => cursor.pointer};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight[700]};
    color: ${({ theme: { BUTTON_COLOR } }) => BUTTON_COLOR};
    transition: ${({ theme: { transition } }) => transition.default};

    &:hover {
        background: ${({ theme: { background } }) => background.darkGrey};
        color: ${({ theme: { color } }) => color.white};
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }
`;
