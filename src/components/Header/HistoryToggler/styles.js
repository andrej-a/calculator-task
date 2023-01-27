import styled from 'styled-components';
import {
  size
} from "@/constants/sizes";

export const ShowHistory = styled.p `
  font-size: 32px;
  letter-spacing: 0px;
  color: ${props => props.theme.SECOND_FONT_COLOR};
  cursor: pointer;
  display: none;

  @media (max-width: ${size.tablet}) {
    display: block;
  }
`
