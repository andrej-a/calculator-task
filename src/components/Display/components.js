import styled from 'styled-components'
import {
  size,
} from '@/sizes'

export const DisplayWrapper = styled.div `
width: 100%;
height: 200px;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: flex-end;

@media(max-width: ${size.tablet}) {
  height: 300px;
}

`
export const ValueWrapper = styled.div `
width: 100%;
height: 200;
overflow-x: scroll;
padding: 25px 106px 32px 64px;
display: flex;
justify-content: flex-end;

@media(max-width: ${size.laptop}) {
  padding: 20px;
}


@media(max-width: ${size.tablet}) {
  height: 300px;
  overflow-y: scroll;
}

`

export const Value = styled.p `
width: 100%;
height: auto;
text-align: right;
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
