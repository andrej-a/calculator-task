import styled from 'styled-components';

import size from '@/constants/sizes';

const { mobileL } = size;

const Options = styled.div`
    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    height: ${({ theme: { heightOptions } }) => heightOptions[90]}px;
    border: ${({ theme: { border, SECOND_BORDER_COLOR } }) => `${border.default} ${SECOND_BORDER_COLOR}`};
    padding-top: ${({ theme: { padding } }) => padding[25]}px;
    padding-left: ${({ theme: { padding } }) => padding[20]}px;

    background: ${({ theme: { background } }) => background.white};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight[700]};
    color: ${({ theme: { color } }) => color.black};
    cursor: pointer;

    &:hover {
        background: ${({ theme: { background } }) => background.darkGrey};
        color: ${({ theme: { color } }) => color.white};
    }

    @media (max-width: ${mobileL}) {
        width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    }
`;

export default Options;
