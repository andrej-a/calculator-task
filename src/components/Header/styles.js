import styled from 'styled-components';

import size from '@/constants/sizes';

export const HeaderWrapper = styled.div `
    display: flex;
    justify-content: space-between;

    width: ${({ theme: { widthOptions }}) => widthOptions.fullScreen};
    max-width: ${({ theme: { widthOptions }}) => widthOptions.desktop};
    height: ${({ theme: { heightOptions }}) => heightOptions.headerHeight};
    border: ${({ theme: { border, SECOND_BORDER_COLOR }}) => `${ border.settingsPageElements } ${ SECOND_BORDER_COLOR }`};

    background: ${({ theme: { MAIN_COLOR }}) => MAIN_COLOR};
`;
export const TitleWrapper = styled.div `
    width: ${({ theme: { widthOptions }}) => widthOptions.autoWidth};
    height: ${({ theme: { heightOptions }}) => heightOptions.autoHeight};
    margin: ${({ theme: { margin }}) => margin.header};

    @media (max-width: ${size.laptop}) {
        z-index: ${({ theme: { zIndex }}) => zIndex.power};
        position: ${({ theme: { position }}) => position.relative};
    }
`;
export const Title = styled.h1 `
    font-size: ${({ theme: { fontSize }}) => fontSize.settingsPageElements};
    color: ${({ theme: { SECOND_FONT_COLOR }}) => SECOND_FONT_COLOR};

    @media (max-width: ${size.mobileM}) {
        font-size: ${({ theme: { fontSize }}) => fontSize.headerMobileM};
    }
`;
export const LinksWrapper = styled.div `
    display: flex;
    gap: ${({ theme: { gap }}) => gap.navigation};

    width: ${({ theme: { widthOptions }}) => widthOptions.autoWidth};
    height: ${({ theme: { heightOptions }}) => heightOptions.autoHeight};
    margin: ${({ theme: { margin }}) => margin.navigation};

    a {
        height: ${({ theme: { heightOptions }}) => heightOptions.linksHeight};
        text-decoration: none;
    }

    @media (max-width: ${size.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: ${({ theme: { position }}) => position.absolute};
        z-index: ${({ theme: { zIndex }}) => zIndex.almostPower};
        left: ${({ showMenu }) => showMenu ? '0' : "-3600px"};

        width: ${({ theme: { widthOptions }}) => widthOptions.fullScreen};
        height: ${({ theme: { heightOptions }}) => heightOptions.calculatorTabletHeight};
        transition: ${({ theme: { transition }}) => transition.default};
        background: ${({ theme: { MAIN_COLOR }}) => MAIN_COLOR};

        a {
            height: ${({ theme: { heightOptions }}) => heightOptions.linksTabletHeight};
        }
    }

    @media (max-width: ${size.mobileL}) {
        height: ${({ theme: { heightOptions }}) => heightOptions.calculatorMobileHeight};
    }
`;

export const BurgerWrapper = styled.div `
    position: ${({ theme: { position }}) => position.relative};
    z-index: ${({ theme: { zIndex }}) => zIndex.power};

    flex-direction: column;
    justify-content: center;
    display: none;

    width: ${({ theme: { widthOptions }}) => widthOptions.autoWidth};
    max-width: ${({ theme: { widthOptions }}) => widthOptions.burger};
    height: ${({ theme: { heightOptions }}) => heightOptions.burger};
    margin: ${({ theme: { margin }}) => margin.burger};
    cursor: ${({ theme: { cursor }}) => cursor.pointer};

    @media (max-width: ${size.tablet}) {
        display: flex;
    }
`;
export const Burger = styled.div `
    width: ${({ theme: { widthOptions }}) => widthOptions.burger};
    height: ${({ theme: { heightOptions }}) => heightOptions.borderHeight};

    background: ${({ theme: { background }}) => background.white};

    &:before {
        position: ${({ theme: { position }}) => position.relative};
        top: -15px;

        display: block;
        width: ${({ theme: { widthOptions }}) => widthOptions.burger};
        height: ${({ theme: { heightOptions }}) => heightOptions.borderHeight};

        content: ' ';
        background: ${({ theme: { background }}) => background.white};
    }

    &:after {
        position: ${({ theme: { position }}) => position.relative};
        top: 15px;

        display: block;
        width: ${({ theme: { widthOptions }}) => widthOptions.burger};
        height: ${({ theme: { heightOptions }}) => heightOptions.borderHeight};

        content: ' ';
        background: ${({ theme: { background }}) => background.white};
    }
`;
