import styled from 'styled-components';

import size from '@/constants/sizes';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    max-width: ${({ theme: { widthOptions } }) => widthOptions[1920]}px;
    height: ${({ theme: { heightOptions } }) => heightOptions[80]}px;
    border: ${({ theme: { border, SECOND_BORDER_COLOR } }) => `${border.default} ${SECOND_BORDER_COLOR}`};

    background: ${({ theme: { MAIN_COLOR } }) => MAIN_COLOR};
`;
export const TitleWrapper = styled.div`
    width: auto;
    height: auto;
    margin: ${({ theme: { margin } }) => margin.header};

    @media (max-width: ${size.laptop}) {
        z-index: ${({ theme: { zIndex } }) => zIndex[4]};
        position: relative;
    }
`;
export const Title = styled.h1`
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    color: ${({ theme: { SECOND_FONT_COLOR } }) => SECOND_FONT_COLOR};

    @media (max-width: ${size.mobileM}) {
        font-size: ${({ theme: { fontSize } }) => fontSize.m}px;
    }
`;
export const LinksWrapper = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap[32]}px;

    width: auto;
    height: auto;
    margin: ${({ theme: { margin } }) => margin.navigation};

    a {
        height: ${({ theme: { heightOptions } }) => heightOptions[45]}px;
        text-decoration: none;
    }

    @media (max-width: ${size.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: ${({ theme: { zIndex } }) => zIndex[3]};
        left: ${({ showMenu }) => (showMenu ? '0' : '-3600px')};

        width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
        height: ${({ theme: { heightOptions } }) => heightOptions[900]}px;
        transition: ${({ theme: { transition } }) => transition.default};
        background: ${({ theme: { MAIN_COLOR } }) => MAIN_COLOR};

        a {
            height: ${({ theme: { heightOptions } }) => heightOptions[60]}px;
        }
    }

    @media (max-width: ${size.mobileL}) {
        height: ${({ theme: { heightOptions } }) => heightOptions[730]}px;
    }
`;

export const BurgerWrapper = styled.div`
    position: relative;
    z-index: ${({ theme: { zIndex } }) => zIndex[4]};

    flex-direction: column;
    justify-content: center;
    display: none;

    width: auto;
    max-width: ${({ theme: { widthOptions } }) => widthOptions[50]}px;
    height: ${({ theme: { heightOptions } }) => heightOptions[30]}px;
    margin: ${({ theme: { margin } }) => margin.burger};
    cursor: ${({ theme: { cursor } }) => cursor.pointer};

    @media (max-width: ${size.tablet}) {
        display: flex;
    }
`;
export const Burger = styled.div`
    width: ${({ theme: { widthOptions } }) => widthOptions[50]}px;
    height: ${({ theme: { heightOptions } }) => heightOptions[2]}px;

    background: ${({ theme: { background } }) => background.white};

    &:before {
        position: relative;
        top: -15px;

        display: block;
        width: ${({ theme: { widthOptions } }) => widthOptions[50]}px;
        height: ${({ theme: { heightOptions } }) => heightOptions[2]}px;

        content: ' ';
        background: ${({ theme: { background } }) => background.white};
    }

    &:after {
        position: relative;
        top: 15px;

        display: block;
        width: ${({ theme: { widthOptions } }) => widthOptions[50]}px;
        height: ${({ theme: { heightOptions } }) => heightOptions[2]}px;

        content: ' ';
        background: ${({ theme: { background } }) => background.white};
    }
`;
