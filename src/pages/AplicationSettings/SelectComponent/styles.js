import styled from 'styled-components';

import size from '@/constants/sizes';

const { mobileL } = size;

export const SelectWrapper = styled.div`
    position: relative;
    width: auto;
    height: auto;
    margin-left: ${({ theme: { margin } }) => margin[90]}px;

    @media (max-width: ${mobileL}) {
        display: flex;
        flex-direction: column;

        width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
        margin-left: ${({ theme: { margin } }) => margin[0]};

        align-items: center;
    }
`;
export const SelectTitleBox = styled.div`
    position: relative;

    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    max-width: ${({ theme: { widthOptions } }) => widthOptions[400]}px;
    height: ${({ theme: { heightOptions } }) => heightOptions[90]}px;
    padding-left: ${({ theme: { padding } }) => padding[20]}px;
    padding-top: ${({ theme: { padding } }) => padding[25]}px;
    border: ${({ theme: { border, SECOND_BORDER_COLOR } }) => `${border.default} ${SECOND_BORDER_COLOR}`};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.default};

    background: ${({ theme: { background } }) => background.white};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight[700]};

    color: ${({ theme: { color } }) => color.black};
    cursor: ${({ theme: { cursor } }) => cursor.pointer};

    img {
        position: absolute;
        right: ${({ theme: { right } }) => right[40]}px;
        top: ${({ theme: { top } }) => top[30]}px;

        transform: rotate(90deg);

        @media (max-width: ${mobileL}) {
            top: ${({ theme: { top } }) => top[10]}px;
        }
    }

    &:hover {
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }

    @media (max-width: ${mobileL}) {
        max-width: none;
        width: ${({ theme: { widthOptions } }) => widthOptions[90]}%;
        height: ${({ theme: { heightOptions } }) => heightOptions[50]}px;
        padding-top: ${({ theme: { padding } }) => padding[5]}px;

        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    }
`;
export const OptionsWrapper = styled.div`
    position: absolute;
    z-index: ${({ theme: { zIndex } }) => zIndex[2]};

    width: ${({ theme: { widthOptions } }) => widthOptions[400]}px;
    height: auto;
    border: ${({ theme: { border, SECOND_BORDER_COLOR } }) => `${border.default} ${SECOND_BORDER_COLOR}`};

    @media (max-width: ${mobileL}) {
        top: ${({ theme: { top } }) => top[50]}px;

        display: flex;
        flex-direction: column;
        width: ${({ theme: { widthOptions } }) => widthOptions[90]}%;

        align-items: center;
    }
`;
