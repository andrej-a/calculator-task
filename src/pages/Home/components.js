import styled from 'styled-components'

import {
  size,
} from '@/sizes'

export const HoumeWrapper = styled.div`
width: 100vw;
max-width: 1920px;
height: auto;
background: ${props => props.theme.MAIN_BACKGROUND_COLOR};
display: flex;
`
export const DisplayKeypadWrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;

@media(max-width: ${size.tablet}) {
  width: 100%;
}
`
