import styled from 'styled-components';

import size from '@/constants/sizes';

const { mobileL } = size;

const Options = styled.div`
    width: ${({ theme: { widthOptions }}) => widthOptions.fullScreen};
    height: ${({ theme: { heightOptions }}) => heightOptions.settingsPageElements};
    border: ${({ theme: { border, SECOND_BORDER_COLOR }}) => `${ border.settingsPageElements } ${ SECOND_BORDER_COLOR }`};
    padding-top: ${({ theme: { padding }}) => padding.settingsPageElementsTop};
    padding-left: ${({ theme: { padding }}) => padding.settingsPageElementsLeft};

    background: ${({ theme: { background }}) => background.white};
    font-size: ${({ theme: { fontSize }}) => fontSize.settingsPageElements};
    font-weight: ${({ theme: { fontWeight }}) => fontWeight.default};
    color: ${({ theme: { color }}) => color.black};
    cursor: ${({ theme: { cursor }}) => cursor.pointer};

    &:hover {
        background: ${({ theme: { background }}) => background.darkGrey};
        color: ${({ theme: { color }}) => color.white};
    }

    @media (max-width: ${ mobileL }) {
        width: ${({ theme: { widthOptions }}) => widthOptions.fullScreen};
    }
`;

export default Options;
