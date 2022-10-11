import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* STYLES */
import { Wrapper, TitleWrapper, Title, LinksWrapper, PageLink, BurgerWrapper, Burger, ShowHistory } from './components'
/* CONSTANTS */
import { HEADER_TITLE, HIDE_HISTORY, HOME_LINK, SETTINGS_LINK, SHOW_HISTORY } from '@/constants/componentsConstants'
/* ACTIONS */
import * as actions from '@/actions/actions'

const Header = ({ theme, showMenu, onSetShowMenu, onSetShowHistory, showHistory }) => {
  return (
    <Wrapper theme={theme}>
      <TitleWrapper>
        <Title theme={theme}>{HEADER_TITLE}</Title>
      </TitleWrapper>

      <BurgerWrapper onClick={() => onSetShowMenu(!showMenu)}>
        <Burger />
      </BurgerWrapper>

      <LinksWrapper className={showMenu ? 'activeBurgerMenu' : ''} theme={theme}>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : 'non-active')}
          end onClick={() => onSetShowMenu(!showMenu)}>
          <div className="link">
            <PageLink theme={theme}>{HOME_LINK}</PageLink>
          </div>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'activeLink' : 'non-active')}
          onClick={() => onSetShowMenu(!showMenu)}>
          <div className="link">
            <PageLink theme={theme}>{SETTINGS_LINK}</PageLink>
          </div>
        </NavLink>
        <ShowHistory theme={theme} onClick={() => {
          onSetShowMenu(!showMenu)
          onSetShowHistory()
        }}>{showHistory ? HIDE_HISTORY : SHOW_HISTORY}
        </ShowHistory>
      </LinksWrapper>
    </Wrapper>
  )
}

Header.propTypes = {
  theme: PropTypes.exact({
    MAIN_BACKGROUND_COLOR: PropTypes.string,
    MAIN_COLOR: PropTypes.string,
    BORDER_COLOR: PropTypes.string,
    SECOND_BORDER_COLOR: PropTypes.string,
    FONT_COLOR: PropTypes.string,
    SECOND_FONT_COLOR: PropTypes.string,
    BUTTON_BACKGROUND_COLOR: PropTypes.string,
    BUTTON_COLOR: PropTypes.string,
    CLEAR_HISTORY_BUTTON_COLOR: PropTypes.string,
  }),
  showMenu: PropTypes.bool,
  onSetShowMenu: PropTypes.func,
  onSetShowHistory: PropTypes.func,
  showHistory: PropTypes.bool,
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(
  mapStateToProps,
  actions,
)(Header)
