import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { HEADER_TITLE, HOME_CLASS_LINK, HOME_LINK, SETTINGS_LINK } from '@/constants/componentsConstants';
import { activeStyle, nonActive } from '@/constants';
import HistoryToggler from './HistoryToggler';
import { Burger, BurgerWrapper, LinksWrapper, PageLink, Title, TitleWrapper, Wrapper } from './styles';

const Header = ({ showMenu, onSetShowMenu, onSetShowHistory, showHistory }) => {
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>{HEADER_TITLE}</Title>
        </TitleWrapper>

        <BurgerWrapper onClick={() => onSetShowMenu(!showMenu)}>
          <Burger />
        </BurgerWrapper>

        <LinksWrapper showMenu={showMenu}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : nonActive)}
            end
            onClick={() => onSetShowMenu(!showMenu)}>
            <PageLink data-test="home">{HOME_LINK}</PageLink>
          </NavLink>
          <NavLink
            to="/homeclass"
            style={({ isActive }) => (isActive ? activeStyle : nonActive)}
            end
            onClick={() => onSetShowMenu(!showMenu)}>
            <PageLink data-test="homeclass">{HOME_CLASS_LINK}</PageLink>
          </NavLink>
          <NavLink
            to="/settings"
            style={({ isActive }) => (isActive ? activeStyle : nonActive)}
            onClick={() => onSetShowMenu(!showMenu)}>
            <PageLink data-test="settings">{SETTINGS_LINK}</PageLink>
          </NavLink>

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
