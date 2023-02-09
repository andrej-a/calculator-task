import styled from 'styled-components';

import size from '@/constants/sizes';

const { mobileL } = size;

export const SelectWrapper = styled.div`
position: relative;
    width: auto;
    height: auto;
    margin-top: 7px;
    margin-left: 91px;

    @media (max-width: ${ mobileL }) {
        display: flex;
        flex-direction: column;

        width: 100%;
        margin-left: 0px;

        align-items: center;
    }
`;
export const SelectTitleBox = styled.div`
    position: relative;

    width: 100%;
    max-width: 401px;
    height: 93px;
    padding-left: 27px;
    padding-top: 28px;
    border: 2px solid #434343;
    border-radius: 8px;

    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 0px;

    color: #000000;
    cursor: pointer;
    transition: all 0.3s ease;

    img {
        position: absolute;
        right: 25px;
        top: 38px;

        width: 0;
        height: 0;
        border: 15px solid transparent;
        border-top: 15px solid #707070;

        @media (max-width: ${ mobileL }) {
            top: 15px;
        }

    }

    &:hover {
        -webkit-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        -moz-box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
        box-shadow: 15px 20px 31px -1px rgba(112, 112, 112, 1);
    }

    @media (max-width: ${ mobileL }) {
        max-width: none;
        width: 90%;
        height: 50px;
        padding-top: 5px;

        font-size: 30px;
    }
`;
export const OptionsWrapper = styled.div`
    position: absolute;
    z-index: 2;

    width: 401px;
    height: auto;
    border: 2px solid #707070;

    @media (max-width: ${ mobileL }) {
        top: 50px;

        display: flex;
        flex-direction: column;

        width: 90%;
        align-items: center;
    }
`;
