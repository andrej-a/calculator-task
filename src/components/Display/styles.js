import styled from 'styled-components';

import size from '@/constants/sizes';

const { laptop, tablet} = size;

export const DisplayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: ${({ theme: { widthOptions }}) => widthOptions.fullScreen};
    min-height: ${({ theme: { heightOptions }}) => heightOptions.displayMinHeight};

    overflow-y: auto;

    border-bottom: ${({ theme: { border }}) => border.wrappers};

    @media (max-width: ${ tablet }) {
        min-height: ${({ theme: { heightOptions }}) => heightOptions.displayMinHeightTablet};
    }
`;

export const ValueWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    width: ${({ theme: { widthOptions }}) => widthOptions.fullScreen};
    max-height: ${({ theme: { heightOptions }}) => heightOptions.maxValueHeight};
    padding: ${({ theme: { padding }}) => padding.displayPadding};

    overflow-x: auto;
    overflow-y: auto;
    min-height: ${({ theme: { heightOptions }}) => heightOptions.displayValueMin};

    @media (max-width: ${ laptop }) {
        padding: ${({ theme: { padding }}) => padding.displayLaptopPadding};
    }

    @media (max-width: ${ tablet }) {
        padding: ${({ theme: { padding }}) => padding.displayTabletPadding};
        max-height: ${({ theme: { heightOptions }}) => heightOptions.displayValueTabletMax};
    }
`;

export const Value = styled.p`
    width: ${({ theme: { widthOptions }}) => widthOptions.autoWidth};
    height: ${({ theme: { heightOptions }}) => heightOptions.autoHeight};

    font-size: ${({ theme: { fontSize }}) => fontSize.desktop};
    font-weight: ${({ theme: { fontWeight }}) => fontWeight.default};
    color: ${({ theme: { FONT_COLOR }}) => FONT_COLOR};

    @media (max-width: ${ tablet }) {
        font-size: ${({ theme: { fontSize }}) => fontSize.settingsPageElements};
        line-height: ${({ theme: { lineHeight }}) => lineHeight.displayLineHeight};
    }
`;
export const ExpressionWrapper = styled(ValueWrapper)`
    @media (max-width: ${ tablet }) {
        min-height: ${({ theme: { heightOptions }}) => heightOptions.expressionMinHeight}
    }
`;

export const Expression = styled(Value)`
    font-size: ${({ theme: { fontSize }}) => fontSize.desktop};
    font-weight: ${({ theme: { fontWeight }}) => fontWeight.default};
    opacity: ${({ theme: { opacity }}) => opacity.default};

    @media (max-width: ${ tablet }) {
        font-size: ${({ theme: { fontSize }}) => fontSize.settingsPageElements};
        overflow-y: hidden;
    }
`;
