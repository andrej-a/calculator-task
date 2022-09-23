import styled from 'styled-components'

export const HistoryWrapper = styled.div `
width: 100%;
max-width: 400px;
height: auto;
min-height: 960px;
display: flex;
flex-direction: column;
`
export const TitleWrapper = styled.div `
width: auto;
height: auto;
margin: 32px 149px 50px 149px;
`

export const Title = styled.h2 `
color: #000000;
letter-spacing: 0px;
font-size: 32px;
`
export const ItemsWrapper = styled.div `
width: 100%;
min-width: 400px;
max-height: 840px;
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
letter-spacing: 0px;
color: #000000;
`
export const Border = styled.div `
margin-top: 25px;
width: 2px;
height: 100%;
max-height: 910px;
background: #707070;
`
