import styled from "styled-components";

import size from "@/constants/sizes";

const PageLink = styled.p`
    font-size: ${({ theme: { fontSize }}) => fontSize.settingsPageElements};
    font-weight: ${({ theme: { fontWeight }}) => fontWeight.default};;
    color: ${({ theme: { SECOND_FONT_COLOR }}) => SECOND_FONT_COLOR};

    @media (max-width: ${size.tablet}) {
        font-size: ${({ theme: { fontSize }}) => fontSize.mobileL};
    }
`;
export default PageLink;
