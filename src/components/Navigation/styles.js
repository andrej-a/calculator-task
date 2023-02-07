import styled from "styled-components";
import { size } from "@/constants/sizes";

export const PageLink = styled.p`
    font-size: 32px;
    letter-spacing: 0px;
    color: ${props => props.theme.SECOND_FONT_COLOR};

    @media (max-width: ${size.tablet}) {
        font-size: 44px;
    }
`;
