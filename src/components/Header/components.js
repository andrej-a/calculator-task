import styled from 'styled-components'

export const Wrapper = styled.div `
  max-width: 1920px;
  min-height: 120px;

  width: 100%;
  height: auto;
  background: ${props => props.theme.MAIN_COLOR};
  border: 1px solid ${props => props.theme.BORDER_COLOR};

  display: flex;
  justify-content: space-between;
`
export const TitleWrapper = styled.div `
  width: auto;
  height: auto;
  margin-top: 42px;
  margin-left: 32px;
`
export const Title = styled.h1 `
font-size: 32px;
letter-spacing: 0px;
color: ${props => props.theme.SECOND_FONT_COLOR};
`
export const LinksWrapper = styled.div `
width: auto;
height: auto;
left: 100%;
margin-top: 42px;
margin-right: 32px;
display: flex;
gap: 32px;

a {
  text-decoration: none;
}
.non-active {
    opacity: 0.7;
}
.activeLink .link{
  border-bottom: 2px solid ${props => props.theme.SECOND_FONT_COLOR};
}
`
export const PageLink = styled.p `
font-size: 32px;
letter-spacing: 0px;
color: ${props => props.theme.SECOND_FONT_COLOR};
`
