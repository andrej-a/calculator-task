import styled from 'styled-components';

import size from '@/constants/sizes';

const { mobileL } = size;

const Options = styled.div`
    width: 100%;
    height: 80px;
    border: 2px solid #707070;
    padding-top: 15px;
    padding-left: 27px;

    letter-spacing: 0px;
    font-weight: 900;

    background: #ffffff 0% 0% no-repeat padding-box;
    font-size: 32px;
    color: #000000;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #707070;
        color: #fff;
    }

    @media (max-width: ${ mobileL }) {
        width: 100%;
    }
`;

export default Options;
