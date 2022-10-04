import styled from 'styled-components'

export const Wrapper = styled.div `
width: 100%;
height: auto;
padding-top: 32px;
padding-bottom: 32px;
display: flex;
flex-wrap: wrap;
justify-content: center;
row-gap: 45px;
column-gap: 128px;
`
export const Key = styled.button `
width: 150px;
height: 150px;
background: ${props => props.theme.BUTTON_BACKGROUND_COLOR} 0% 0% no-repeat padding-box;
border: 1px solid ${props => props.theme.BORDER_COLOR};
border-radius: 32px;
cursor: pointer;
font: normal normal normal 64px/77px Helvetica Neue;
letter-spacing: 0px;
color: ${props => props.theme.BUTTON_COLOR};
`
