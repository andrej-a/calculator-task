import styled from 'styled-components'

export const HistoryWrapper = styled.div `
width: 100%;
max-width: 400px;
height: auto;
min-height: 960px;
display: flex;
flex-direction: column;
align-items: center;
`
export const TitleWrapper = styled.div `
width: auto;
height: auto;
margin-top: 32px;
`

export const Title = styled.h2 `
color: ${props => props.theme.FONT_COLOR};
letter-spacing: 0px;
font-size: 32px;
font-weight: 700;
`
export const ItemsWrapper = styled.div `
width: 100%;
min-width: 400px;
max-height: 1050px;
overflow-y: auto;
overflow-x: hidden;

display: flex;
flex-direction: column;
`
export const HistoryItemWrapper = styled.div `
margin-left: 32px;
`
export const HistoryItem = styled.p `
margin-bottom: 32px;
font-size: 30px;
font-weight: 700;
letter-spacing: 0px;
color: ${props => props.theme.FONT_COLOR};
`
export const Border = styled.div `
margin-top: 25px;
width: 2px;
height: 100%;
min-height: 910px;
background: ${props => props.theme.BORDER_COLOR};
`
