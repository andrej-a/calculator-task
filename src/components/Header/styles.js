import styled from 'styled-components';

import { size } from '@/constants/sizes';

export const Wrapper = styled.div`
    width: 100vw;
    max-width: ${size.desktop};
    min-height: 120px;
    height: auto;
    background: ${props => props.theme.MAIN_COLOR};
    border: 1px solid ${props => props.theme.BORDER_COLOR};

    display: flex;
    justify-content: space-between;

    @media (max-width: ${size.laptop}) {
        min-height: auto;
        height: 80px;
    }

    .activeBurgerMenu {
        left: 0;
    }
`;
export const TitleWrapper = styled.div`
    width: auto;
    height: auto;
    margin-top: 42px;
    margin-left: 32px;

    @media (max-width: ${size.laptop}) {
        margin-top: 22px;
        margin-left: 32px;
        position: relative;
        z-index: 4;
    }
`;
export const Title = styled.h1`
    font-size: 32px;
    letter-spacing: 0px;
    color: ${props => props.theme.SECOND_FONT_COLOR};
`;
export const LinksWrapper = styled.div`
    width: auto;
    height: auto;
    margin-top: 42px;
    margin-right: 32px;
    display: flex;
    gap: 32px;
    transition: all 0.3s ease;

    a {
        text-decoration: none;
    }
    .non-active {
        opacity: 0.7;
    }
    .activeLink .link {
        border-bottom: 2px solid ${props => props.theme.SECOND_FONT_COLOR};
    }

    @media (max-width: ${size.laptop}) {
        margin-top: 22px;
        margin-right: 32px;
    }

    @media (max-width: ${size.tablet}) {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 3;
        left: -3600px;
        background: ${props => props.theme.MAIN_COLOR};
    }
`;
export const PageLink = styled.p`
    font-size: 32px;
    letter-spacing: 0px;
    color: ${props => props.theme.SECOND_FONT_COLOR};

    @media (max-width: ${size.tablet}) {
        font-size: 44px;
    }
`;
export const BurgerWrapper = styled.div`
    position: relative;
    z-index: 4;
    width: auto;
    max-width: 50px;
    height: 30px;
    flex-direction: column;
    justify-content: center;
    margin-top: 28px;
    margin-right: 32px;
    cursor: pointer;
    display: none;

    @media (max-width: ${size.tablet}) {
        display: flex;
    }
`;
export const Burger = styled.div`
    width: 50px;
    height: 2px;
    background: #fff;

    &:before {
        content: ' ';
        display: block;
        position: relative;
        top: -15px;
        width: 50px;
        height: 2px;
        background: #fff;
    }

    &:after {
        content: ' ';
        display: block;
        position: relative;
        top: 15px;
        width: 50px;
        height: 2px;
        background: #fff;
    }
`;
