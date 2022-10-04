import React from 'react'
import { NavLink } from 'react-router-dom'
import { Wrapper, TitleWrapper, Title, LinksWrapper, PageLink } from './components'
import { HEADER_TITLE, HOME_LINK, SETTINGS_LINK } from '@/constants/componentsConstants'
import * as actions from '@/actions/actions'
import { connect } from "react-redux"

const Header = props => {
  const { theme } = props
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

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps, actions)(Header)
