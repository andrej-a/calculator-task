import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

/* ACTIONS */
import * as actions from '@/actions/actions'
/* CONSTANTS */
import { HEADER_TITLE, HIDE_HISTORY, HOME_LINK, SETTINGS_LINK, SHOW_HISTORY } from '@/constants/componentsConstants'

/* STYLES */
import { Burger, BurgerWrapper, LinksWrapper, PageLink, ShowHistory, Title, TitleWrapper, Wrapper } from './components'

const Header = ({ theme, showMenu, onSetShowMenu, onSetShowHistory, showHistory }) => (
  <Wrapper theme={theme}>
    <TitleWrapper>
      <Title theme={theme}>{HEADER_TITLE}</Title>
    </TitleWrapper>

    <BurgerWrapper onClick={() => onSetShowMenu(!showMenu)}>
      <Burger />
    </BurgerWrapper>

    <LinksWrapper className={showMenu ? 'activeBurgerMenu' : ''} theme={theme}>
      <NavLink
        to='/' className={({ isActive }) => (isActive ? 'activeLink' : 'non-active')}
        end onClick={() => onSetShowMenu(!showMenu)}>
        <div className='link'>
          <PageLink data-test='home' theme={theme}>{HOME_LINK}</PageLink>
        </div>
      </NavLink>
      <NavLink
        to='/settings' className={({ isActive }) => (isActive ? 'activeLink' : 'non-active')}
        onClick={() => onSetShowMenu(!showMenu)}>
        <div className='link'>
          <PageLink data-test='settings' theme={theme}>{SETTINGS_LINK}</PageLink>
        </div>
      </NavLink>
      <ShowHistory
        theme={theme} onClick={() => {
          onSetShowMenu(!showMenu)
          onSetShowHistory()
        }}>
        {showHistory ? HIDE_HISTORY : SHOW_HISTORY}
      </ShowHistory>
    </LinksWrapper>
  </Wrapper>
)

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

const mapStateToProps = ({ theme }) => ({
  theme,
})

export default connect(
  mapStateToProps,
  actions,
)(Header)
