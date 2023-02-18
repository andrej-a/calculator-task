import styled from 'styled-components';

import size from '@/constants/sizes';

const ShowHistory = styled.p`
    display: none;

    font-size: 32px;
    color: ${({ theme: { SECOND_FONT_COLOR }}) => SECOND_FONT_COLOR};
    cursor: pointer;

    @media (max-width: ${size.tablet}) {
        display: block;
    }
`;
export default ShowHistory;
