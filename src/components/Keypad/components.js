import styled from 'styled-components'

export const Wrapper = styled.div `
width: 100%;
height: auto;
padding: 32px 20px 32px 130px;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
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
transition: all .3s ease;

&:hover{
-webkit-box-shadow: 15px 20px 31px -1px rgba(112,112,112,1);
-moz-box-shadow: 15px 20px 31px -1px rgba(112,112,112,1);
box-shadow: 15px 20px 31px -1px rgba(112,112,112,1);
}

`
