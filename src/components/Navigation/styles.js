import styled from 'styled-components';

import size from '@/constants/sizes';

const PageLink = styled.p`
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight[700]};
    color: ${({ theme: { SECOND_FONT_COLOR } }) => SECOND_FONT_COLOR};

    @media (max-width: ${size.tablet}) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    }
`;
export default PageLink;
