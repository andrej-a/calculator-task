import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { HEADER_TITLE, HIDE_HISTORY, HOME_LINK, SETTINGS_LINK, SHOW_HISTORY, HOME_CLASS_LINK } from '@/constants/componentsConstants';

import { HistoryToggler } from './HistoryToggler';
import { Burger, BurgerWrapper, LinksWrapper, PageLink, Title, TitleWrapper, Wrapper } from './styles';

const Header = ({ showMenu, onSetShowMenu, onSetShowHistory, showHistory }) => (
  <Wrapper>
    <TitleWrapper>
      <Title>{HEADER_TITLE}</Title>
    </TitleWrapper>

    <BurgerWrapper onClick={() => onSetShowMenu(!showMenu)}>
      <Burger />
    </BurgerWrapper>

    <LinksWrapper className={showMenu ? 'activeBurgerMenu' : ''}>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : 'non-active')} end onClick={() => onSetShowMenu(!showMenu)}>
        <div className="link">
          <PageLink data-test="home">{HOME_LINK}</PageLink>
        </div>
      </NavLink>
      <NavLink to="/homeclass" className={({ isActive }) => (isActive ? 'activeLink' : 'non-active')} end onClick={() => onSetShowMenu(!showMenu)}>
        <div className="link">
          <PageLink data-test="homeclass">{HOME_CLASS_LINK}</PageLink>
        </div>
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => (isActive ? 'activeLink' : 'non-active')} onClick={() => onSetShowMenu(!showMenu)}>
        <div className="link">
          <PageLink data-test="settings">{SETTINGS_LINK}</PageLink>
        </div>
      </NavLink>

      <HistoryToggler showHistory={showHistory} showMenu={showMenu} onSetShowMenu={onSetShowMenu} onSetShowHistory={onSetShowHistory} />
    </LinksWrapper>
  </Wrapper>
);

Header.propTypes = {
  showMenu: PropTypes.bool,
  onSetShowMenu: PropTypes.func,
  onSetShowHistory: PropTypes.func,
  showHistory: PropTypes.bool
};

export default Header;
