import styled from 'styled-components';

import size from '@/constants/sizes';

const { laptop, tablet} = size;

export const DisplayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: ${props => props.theme.widthOptions.fullScreen};
    min-height: ${props => props.theme.heightOptions.displayMinHeight};

    overflow-y: auto;

    @media (max-width: ${ tablet }) {
        min-height: ${props => props.theme.heightOptions.displayMinHeightTablet};
    }
`;

export const ValueWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    width: ${props => props.theme.widthOptions.fullScreen};
    max-height: ${props => props.theme.heightOptions.maxValueHeight};
    padding: ${props => props.theme.padding.displayPadding};

    overflow-x: auto;
    overflow-y: auto;
    min-height: ${props => props.theme.heightOptions.displayValueMin};

    @media (max-width: ${ laptop }) {
        padding: ${props => props.theme.padding.displayLaptopPadding};
    }

    @media (max-width: ${ tablet }) {
        padding: ${props => props.theme.padding.displayTabletPadding};
        max-height: ${props => props.theme.heightOptions.displayValueTabletMax};
    }
`;

export const Value = styled.p`
    width: ${props => props.theme.widthOptions.autoWidth};
    height: ${props => props.theme.heightOptions.autoHeight};

    font-size: ${props => props.theme.fontSize.desktop};
    font-weight: ${props => props.theme.fontWeight.default};
    color: ${props => props.theme.FONT_COLOR};

    @media (max-width: ${ tablet }) {
        font-size: ${props => props.theme.fontSize.settingsPageElements};
        line-height: ${props => props.theme.lineHeight.displayLineHeight};
    }
`;
export const ExpressionWrapper = styled(ValueWrapper)`
    @media (max-width: ${ tablet }) {
        min-height: ${props => props.theme.heightOptions.expressionMinHeight}
    }
`;

export const Expression = styled(Value)`
    font-size: ${props => props.theme.fontSize.desktop};
    font-weight: ${props => props.theme.fontWeight.default};
    opacity: ${props => props.theme.opacity.default};

    @media (max-width: ${ tablet }) {
        font-size: ${props => props.theme.fontSize.settingsPageElements};
        overflow-y: hidden;
    }

`;

export const Border = styled.div`
    width: ${props => props.theme.widthOptions.borderWidth};
    height: ${props => props.theme.heightOptions.borderHeight};
    background: ${props => props.theme.BORDER_COLOR};
    margin: ${props => props.theme.margin.center};

    @media (max-width: ${ tablet }) {
        margin: ${props => props.theme.margin.noMargin};
        width: ${props => props.theme.widthOptions.fullScreen};
    }
`;
