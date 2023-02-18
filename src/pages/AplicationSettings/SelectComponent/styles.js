import styled from 'styled-components';

import size from '@/constants/sizes';

const { mobileL } = size;

export const SelectWrapper = styled.div`
    position: ${({ theme: { position } }) => position.relative};
    width: ${({ theme: { widthOptions } }) => widthOptions.autoWidth};
    height: ${({ theme: { heightOptions } }) => heightOptions.autoHeight};
    margin-left: ${({ theme: { margin } }) => margin.settingsPageElements};

    @media (max-width: ${ mobileL }) {
        display: flex;
        flex-direction: column;

        width: ${({ theme: { widthOptions } }) => widthOptions.fullScreen};
        margin-left: ${({ theme: { margin } }) => margin.noLeft};

        align-items: ${({ theme: { aligntItems } }) => aligntItems.center};
    }
`;
export const SelectTitleBox = styled.div`
    position: ${({ theme: { position } }) => position.relative};

    width: ${({ theme: { widthOptions } }) => widthOptions.fullScreen};
    max-width: ${({ theme: { widthOptions } }) => widthOptions.settingsPageElements};
    height: ${({ theme: { heightOptions } }) => heightOptions.settingsPageElements};
    padding-left: ${({ theme: { padding } }) => padding.settingsPageElementsLeft};
    padding-top: ${({ theme: { padding } }) => padding.settingsPageElementsTop};
    border: ${({ theme: { border, SECOND_BORDER_COLOR } }) => `${ border.settingsPageElements } ${ SECOND_BORDER_COLOR }`};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.settingsPageElements};

    background: ${({ theme: { background } }) => background.white};
    font-size: ${({ theme: { fontSize } }) => fontSize.settingsPageElements};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.default};

    color: ${({ theme: { color } }) => color.black};
    cursor: ${({ theme: { cursor } }) => cursor.pointer};

    img {
        position: ${({ theme: { position } }) => position.absolute};
        right: ${({ theme: { right } }) => right.IMGRight};
        top: ${({ theme: { top } }) => top.IMGTop};

        transform: rotate(90deg);

        @media (max-width: ${ mobileL }) {
            top: ${({ theme: { top } }) => top.IMGTopMobile};
        }

    }

    &:hover {
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }

    @media (max-width: ${ mobileL }) {
        max-width: ${({ theme: { widthOptions } }) => widthOptions.noMaxWidth};
        width: ${({ theme: { widthOptions } }) => widthOptions.selectTitleMobileL};
        height: ${({ theme: { heightOptions } }) => heightOptions.settingsPageElementsMobile};
        padding-top: ${({ theme: { padding } }) => padding.selectComponentTopMobileL};

        font-size: ${({ theme: { fontSize } }) => fontSize.settingsPageElements};
    }
`;
export const OptionsWrapper = styled.div`
    position: ${({ theme: { position } }) => position.absolute};
    z-index: ${({ theme: { zIndex } }) => zIndex.stronger};

    width: ${({ theme: { widthOptions } }) => widthOptions.settingsPageElements};
    height: ${({ theme: { heightOptions } }) => heightOptions.autoHeight};
    border: ${({ theme: { border, SECOND_BORDER_COLOR } }) => `${border.settingsPageElements} ${ SECOND_BORDER_COLOR }`};

    @media (max-width: ${ mobileL }) {
        top: ${({ theme: { top } }) => top.optionsTop};

        display: flex;
        flex-direction: column;
        width: ${({ theme: { widthOptions } }) => widthOptions.selectTitleMobileL};

        align-items: ${({ theme: { aligntItems } }) => aligntItems.center};
    }
`;
