import styled from 'styled-components'

export const DisplayWrapper = styled.div `
width: 100%;
height: auto;
min-height: 180px;
display: flex;
flex-direction: column;
align-items: flex-end;
`
export const ValueWrapper = styled.div `
margin: 64px 126px 32px 30px;
`

export const Value = styled.p `
font: normal normal normal 64px/77px Helvetica Neue;
font-weight: 600;
letter-spacing: 0px;
color: ${props => props.theme.FONT_COLOR};
`
export const Border = styled.div `
width: 95%;
height: 2px;
background: ${props => props.theme.BORDER_COLOR};
margin-right: 25px;
margin-left: 25px;
`
