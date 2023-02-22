import styled from 'styled-components';

import size from '@/constants/sizes';

const { laptop, tablet } = size;

export const DisplayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    min-height: ${({ theme: { heightOptions } }) => heightOptions[158]}px;

    overflow-y: auto;

    border-bottom: ${({ theme: { border } }) => border.default};

    @media (max-width: ${tablet}) {
        min-height: ${({ theme: { heightOptions } }) => heightOptions[80]}px;
    }
`;

export const ValueWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    max-height: ${({ theme: { heightOptions } }) => heightOptions[250]}px;
    padding: ${({ theme: { padding } }) => padding.displayPadding};

    overflow-x: auto;
    overflow-y: auto;
    min-height: ${({ theme: { heightOptions } }) => heightOptions[49]}%;

    @media (max-width: ${laptop}) {
        padding: ${({ theme: { padding } }) => padding.displayLaptopPadding};
    }

    @media (max-width: ${tablet}) {
        padding: ${({ theme: { padding } }) => padding.displayTabletPadding};
        max-height: ${({ theme: { heightOptions } }) => heightOptions[50]}%;
    }
`;

export const Value = styled.p`
    width: auto;
    height: auto;

    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight[700]};
    color: ${({ theme: { FONT_COLOR } }) => FONT_COLOR};

    @media (max-width: ${tablet}) {
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight[40]}px;
    }
`;
export const ExpressionWrapper = styled(ValueWrapper)`
    @media (max-width: ${tablet}) {
        min-height: ${({ theme: { heightOptions } }) => heightOptions[40]}px;
    }
`;

export const Expression = styled(Value)`
    font-size: ${({ theme: { fontSize } }) => fontSize.desktop};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.default};
    opacity: ${({ theme: { opacity } }) => opacity.default};

    @media (max-width: ${tablet}) {
        font-size: ${({ theme: { fontSize } }) => fontSize.settingsPageElements};
        overflow-y: hidden;
    }
`;
