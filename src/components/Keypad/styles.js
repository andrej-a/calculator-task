import styled from 'styled-components';

import size from '@/constants/sizes';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    height: auto;
    max-height: inherit;
    gap: ${({ theme: { gap } }) => gap[15]}px;
    padding-left: ${({ theme: { padding } }) => padding[5]}%;
    margin-top: ${({ theme: { margin } }) => margin[20]}px;

    @media (max-width: ${size.tablet}) {
        padding: ${({ theme: { padding } }) => padding.keypad};
    }

    @media (max-width: ${size.mobileL}) {
        align-items: center;

        gap: ${({ theme: { gap } }) => gap[0]};
        padding: ${({ theme: { padding } }) => padding.keypadMobileL};
        margin-bottom: ${({ theme: { margin } }) => margin[10]}px;
    }
`;
export const Key = styled.button`
    width: ${({ theme: { widthOptions } }) => widthOptions[18]}%;
    height: ${({ theme: { heightOptions } }) => heightOptions[125]}px;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.default};

    background: ${({ theme: { BUTTON_BACKGROUND_COLOR } }) => BUTTON_BACKGROUND_COLOR};
    cursor: pointer;
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    color: ${({ theme: { BUTTON_COLOR } }) => BUTTON_COLOR};
    transition: ${({ theme: { transition } }) => transition.default};

    &:hover {
        background: ${({ theme: { background } }) => background.darkGrey};
        color: ${({ theme: { color } }) => color.white};
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }

    &:disabled {
        background: ${({ theme: { BUTTON_BACKGROUND_COLOR } }) => BUTTON_BACKGROUND_COLOR};
        color: ${({ theme: { BUTTON_COLOR } }) => BUTTON_COLOR};
        cursor: not-allowed;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    @media (max-width: ${size.laptop}) {
        width: ${({ theme: { widthOptions } }) => widthOptions[17]}%;
    }

    @media (max-width: ${size.tablet}) {
        width: ${({ theme: { widthOptions } }) => widthOptions[16]}%;
        font-size: ${({ theme: { fontSize } }) => fontSize[46]}px;
    }

    @media (max-width: ${size.mobileL}) {
        width: ${({ theme: { widthOptions } }) => widthOptions[20]}%;
        height: ${({ theme: { heightOptions } }) => heightOptions[110]}px;
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    }
`;
