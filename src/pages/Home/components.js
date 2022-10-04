import styled from 'styled-components'

export const HoumeWrapper = styled.div `
width: 100%;
max-width: 1920px;
max-height: 960px;
height: auto;
background: ${props => props.theme.MAIN_BACKGROUND_COLOR};
display: flex;
`
export const DisplayKeypadWrapper = styled.div `
width: 100%;
max-height: 960px;
height: auto;
display: flex;
flex-direction: column;
`
