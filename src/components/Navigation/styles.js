import styled from 'styled-components';

import size from '@/constants/sizes';

const PageLink = styled.p`
    border-bottom: ${({ isActive, theme: { border, color } }) => (isActive ? border.default + color.beige : border[0])};

    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight[700]};
    color: ${({ theme: { SECOND_FONT_COLOR } }) => SECOND_FONT_COLOR};
    opacity: ${({ isActive, theme: { opacity } }) => (isActive ? opacity[1] : opacity.navigation)};

    @media (max-width: ${size.tablet}) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    }
`;
export default PageLink;
