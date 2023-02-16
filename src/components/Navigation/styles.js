import styled from "styled-components";

import size from "@/constants/sizes";

const PageLink = styled.p`
    font-size: ${props => props.theme.fontSize.settingsPageElements};
    font-weight: ${props => props.theme.fontWeight.default};;
    color: ${props => props.theme.SECOND_FONT_COLOR};

    @media (max-width: ${size.tablet}) {
        font-size: ${props => props.theme.fontSize.mobileL};
    }
`;
export default PageLink;
