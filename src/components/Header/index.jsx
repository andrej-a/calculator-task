import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '@/constants/links';
import { HEADER_TITLE } from '@/constants/componentsConstants';
import { activeStyle, nonActive } from '@/constants';
import HistoryToggler from './HistoryToggler';
import { Burger, BurgerWrapper, LinksWrapper, PageLink, Title, TitleWrapper, Wrapper } from './styles';
import { useTranslation } from 'react-i18next';

const Header = ({ showMenu, onSetShowMenu, onSetShowHistory, showHistory }) => {
    const { t } = useTranslation();
    const menu = links.map(({ link, data_test, title }) => {
        return <NavLink
            key={title}
            to={link}
            style={({ isActive }) => (isActive ? activeStyle : nonActive)}
            end
            onClick={onSetShowMenu}>
            <PageLink data-test={data_test}>{t(title)}</PageLink>
        </NavLink>
    })

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>{HEADER_TITLE}</Title>
            </TitleWrapper>

            <BurgerWrapper onClick={onSetShowMenu}>
                <Burger />
            </BurgerWrapper>

            <LinksWrapper showMenu={showMenu}>
                {menu}
                <HistoryToggler
                    showHistory={showHistory}
                    showMenu={showMenu}
                    onSetShowMenu={onSetShowMenu}
                    onSetShowHistory={onSetShowHistory}
                />
            </LinksWrapper>
        </Wrapper>
    );
};

Header.propTypes = {
    showMenu: PropTypes.bool,
    onSetShowMenu: PropTypes.func,
    onSetShowHistory: PropTypes.func,
    showHistory: PropTypes.bool
};

export default Header;
