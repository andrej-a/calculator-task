import React from 'react'
import { Wrapper, TitleWrapper, Title, LinksWrapper, Link } from './components'
import { HEADER_TITLE, HOME_LINK, SETTINGS_LINK } from '@/constants/componentsConstants'
export const Header = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          {HEADER_TITLE}
        </Title>
      </TitleWrapper>

      <LinksWrapper>
        <Link>
          {HOME_LINK}
        </Link>
        <Link>
          {SETTINGS_LINK}
        </Link>
      </LinksWrapper>
    </Wrapper>
  )
}
