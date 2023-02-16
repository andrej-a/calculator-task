import styled from 'styled-components';

import size from '@/constants/sizes';

const { mobileL } = size;

export const SelectWrapper = styled.div`
    position: ${props => props.theme.position.relative};
    width: ${props => props.theme.widthOptions.autoWidth};
    height: ${props => props.theme.heightOptions.autoHeight};
    margin-left: ${props => props.theme.margin.settingsPageElements};

    @media (max-width: ${ mobileL }) {
        display: flex;
        flex-direction: column;

        width: ${props => props.theme.widthOptions.fullScreen};
        margin-left: ${props => props.theme.margin.noLeft};

        align-items: ${props => props.theme.aligntItems.center};
    }
`;
export const SelectTitleBox = styled.div`
    position: ${props => props.theme.position.relative};

    width: ${props => props.theme.widthOptions.fullScreen};
    max-width: ${props => props.theme.widthOptions.settingsPageElements};
    height: ${props => props.theme.heightOptions.settingsPageElements};
    padding-left: ${props => props.theme.padding.settingsPageElementsLeft};
    padding-top: ${props => props.theme.padding.settingsPageElementsTop};
    border: ${props => `${props.theme.border.settingsPageElements} ${props.theme.SECOND_BORDER_COLOR}`};
    border-radius: ${props => props.theme.borderRadius.settingsPageElements};

    background: ${props => props.theme.background.white};
    font-size: ${props => props.theme.fontSize.settingsPageElements};
    font-weight: ${props => props.theme.fontWeight.default};

    color: ${props => props.theme.color.black};
    cursor: ${props => props.theme.cursor.pointer};

    img {
        position: ${props => props.theme.position.absolute};
        right: ${props => props.theme.right.IMGRight};
        top: ${props => props.theme.top.IMGTop};

        transform: rotate(90deg);

        @media (max-width: ${ mobileL }) {
            top: ${props => props.theme.top.IMGTopMobile};
        }

    }

    &:hover {
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }

    @media (max-width: ${ mobileL }) {
        max-width: ${props => props.theme.widthOptions.noMaxWidth};
        width: ${props => props.theme.widthOptions.selectTitleMobileL};
        height: ${props => props.theme.heightOptions.settingsPageElementsMobile};
        padding-top: ${props => props.theme.padding.selectComponentTopMobileL};

        font-size: ${props => props.theme.fontSize.settingsPageElements};
    }
`;
export const OptionsWrapper = styled.div`
    position: ${props => props.theme.position.absolute};
    z-index: ${props => props.theme.zIndex.stronger};

    width: ${props => props.theme.widthOptions.settingsPageElements};
    height: ${props => props.theme.heightOptions.autoHeight};
    border: ${props => `${props.theme.border.settingsPageElements} ${props.theme.SECOND_BORDER_COLOR}`};

    @media (max-width: ${ mobileL }) {
        top: ${props => props.theme.top.optionsTop};

        display: flex;
        flex-direction: column;
        width: ${props => props.theme.widthOptions.selectTitleMobileL};

        align-items: ${props => props.theme.aligntItems.center};
    }
`;
