import styled from 'styled-components';

import size from '@/constants/sizes';

export const HeaderWrapper = styled.div `
    display: flex;
    justify-content: space-between;

    width: ${props => props.theme.widthOptions.width};
    max-width: ${props => props.theme.widthOptions.maxWidth};
    min-height: auto;
    height: 80px;
    border: 1px solid ${props => props.theme.BORDER_COLOR};

    background: ${props => props.theme.MAIN_COLOR};
`;
export const TitleWrapper = styled.div `
    width: auto;
    height: auto;
    margin-top: 22px;
    margin-left: 32px;

    @media (max-width: ${size.laptop}) {
        z-index: 4;
        position: relative;
    }
`;
export const Title = styled.h1 `
    font-size: 32px;
    letter-spacing: 0px;
    color: ${props => props.theme.SECOND_FONT_COLOR};

    @media (max-width: ${size.mobileM}) {
        font-size: 28px;
    }
`;
export const LinksWrapper = styled.div `
    display: flex;
    gap: 32px;

    width: auto;
    height: auto;
    margin-top: 22px;
    margin-right: 32px;
    transition: all 0.3s ease;

    a {
        height: 45px;

        text-decoration: none;
    }

    @media (max-width: ${size.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 3;
        left: ${props => props.showMenu ? '0' : "-3600px"};

        width: 100vw;
        height: 900px;

        background: ${props => props.theme.MAIN_COLOR};

        a {
            height: 60px;
        }
    }

    @media (max-width: ${size.mobileL}) {
        height: 730px;
    }
`;

export const BurgerWrapper = styled.div `
    position: relative;
    z-index: 4;
    flex-direction: column;
    justify-content: center;
    display: none;

    width: auto;
    max-width: 50px;
    height: 30px;
    margin-top: 28px;
    margin-right: 32px;
    cursor: pointer;

    @media (max-width: ${size.tablet}) {
        display: flex;
    }
`;
export const Burger = styled.div `
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
