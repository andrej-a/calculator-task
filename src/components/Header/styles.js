import styled from 'styled-components';

import size from '@/constants/sizes';

export const HeaderWrapper = styled.div `
    display: flex;
    justify-content: space-between;

    width: ${props => props.theme.widthOptions.fullScreen};
    max-width: ${props => props.theme.widthOptions.desktop};
    height: ${props => props.theme.heightOptions.headerHeight};
    border: ${props => `${props.theme.border.settingsPageElements} ${props.theme.SECOND_BORDER_COLOR}`};

    background: ${props => props.theme.MAIN_COLOR};
`;
export const TitleWrapper = styled.div `
    width: ${props => props.theme.widthOptions.autoWidth};
    height: ${props => props.theme.heightOptions.autoHeight};
    margin: ${props => props.theme.margin.header};

    @media (max-width: ${size.laptop}) {
        z-index: ${props => props.theme.zIndex.power};
        position: ${props => props.theme.position.relative};
    }
`;
export const Title = styled.h1 `
    font-size: ${props => props.theme.fontSize.settingsPageElements};
    color: ${props => props.theme.SECOND_FONT_COLOR};

    @media (max-width: ${size.mobileM}) {
        font-size: ${props => props.theme.fontSize.headerMobileM};
    }
`;
export const LinksWrapper = styled.div `
    display: flex;
    gap: ${props => props.theme.gap.navigation};

    width: ${props => props.theme.widthOptions.autoWidth};
    height: ${props => props.theme.heightOptions.autoHeight};
    margin: ${props => props.theme.margin.navigation};

    a {
        height: ${props => props.theme.heightOptions.linksHeight};
        text-decoration: none;
    }

    @media (max-width: ${size.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: ${props => props.theme.position.absolute};
        z-index: ${props => props.theme.zIndex.almostPower};
        left: ${props => props.showMenu ? '0' : "-3600px"};

        width: ${props => props.theme.widthOptions.fullScreen};
        height: ${props => props.theme.heightOptions.calculatorTabletHeight};
        transition: ${props => props.theme.transition.default};
        background: ${props => props.theme.MAIN_COLOR};

        a {
            height: ${props => props.theme.heightOptions.linksTabletHeight};
        }
    }

    @media (max-width: ${size.mobileL}) {
        height: ${props => props.theme.heightOptions.calculatorMobileHeight};
    }
`;

export const BurgerWrapper = styled.div `
    position: ${props => props.theme.position.relative};
    z-index: ${props => props.theme.zIndex.power};

    flex-direction: column;
    justify-content: center;
    display: none;

    width: ${props => props.theme.widthOptions.autoWidth};
    max-width: ${props => props.theme.widthOptions.burger};
    height: ${props => props.theme.heightOptions.burger};
    margin: ${props => props.theme.margin.burger};
    cursor: ${props => props.theme.cursor.pointer};

    @media (max-width: ${size.tablet}) {
        display: flex;
    }
`;
export const Burger = styled.div `
    width: ${props => props.theme.widthOptions.burger};
    height: ${props => props.theme.heightOptions.borderHeight};

    background: ${props => props.theme.background.white};

    &:before {
        position: ${props => props.theme.position.relative};
        top: -15px;

        display: block;
        width: ${props => props.theme.widthOptions.burger};
        height: ${props => props.theme.heightOptions.borderHeight};

        content: ' ';
        background: ${props => props.theme.background.white};
    }

    &:after {
        position: ${props => props.theme.position.relative};
        top: 15px;

        display: block;
        width: ${props => props.theme.widthOptions.burger};
        height: ${props => props.theme.heightOptions.borderHeight};

        content: ' ';
        background: ${props => props.theme.background.white};
    }
`;
