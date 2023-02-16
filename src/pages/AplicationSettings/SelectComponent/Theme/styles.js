import styled from 'styled-components';

import size from '@/constants/sizes';

const { mobileL } = size;

const Options = styled.div`
    width: ${props => props.theme.widthOptions.fullScreen};
    height: ${props => props.theme.heightOptions.settingsPageElements};
    border: ${props => `${props.theme.border.settingsPageElements} ${props.theme.SECOND_BORDER_COLOR}`};
    padding-top: ${props => props.theme.padding.settingsPageElementsTop};
    padding-left: ${props => props.theme.padding.settingsPageElementsLeft};

    background: ${props => props.theme.background.white};
    font-size: ${props => props.theme.fontSize.settingsPageElements};
    font-weight: ${props => props.theme.fontWeight.default};
    color: ${props => props.theme.color.black};
    cursor: ${props => props.theme.cursor.pointer};

    &:hover {
        background: ${props => props.theme.background.darkGrey};
        color: ${props => props.theme.color.white};
    }

    @media (max-width: ${ mobileL }) {
        width: ${props => props.theme.widthOptions.fullScreen};
    }
`;

export default Options;
