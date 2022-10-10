import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

/* STYLES */
import { Wrapper, TitleWrapper, Title, LinksWrapper, PageLink } from './components'
/* CONSTANTS */
import { HEADER_TITLE, HOME_LINK, SETTINGS_LINK } from '@/constants/componentsConstants'
/* ACTIONS */
import * as actions from '@/actions/actions'

const Header = ({ theme }) => {
  return (
    <Wrapper theme={theme}>
      <TitleWrapper>
        <Title theme={theme}>
          {HEADER_TITLE}
        </Title>
      </TitleWrapper>

      <LinksWrapper theme={theme}>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : 'non-active')}
          end>
          <div className="link">
            <PageLink theme={theme}>
              {HOME_LINK}
            </PageLink>
          </div>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'activeLink' : 'non-active')}>
          <div className="link">
            <PageLink theme={theme}>
              {SETTINGS_LINK}
            </PageLink>
          </div>
        </NavLink>
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
}


const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps, actions)(Header)
