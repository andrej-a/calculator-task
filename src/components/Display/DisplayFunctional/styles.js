import styled from 'styled-components';

import {
  size
} from '@/constants/sizes';

export const DisplayWrapper = styled.div `
    width: 100%;
    height: auto;
    margin-bottom: 50px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ValueWrapper = styled.div `
    width: 100%;
    max-height: 250px;
    overflow-x: auto;
    overflow-y: auto;
    padding: 0px 106px 10px 64px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: ${size.laptop}) {
        padding: 10px;
    }
`;

export const Value = styled.p `
    width: 100%;
    height: auto;
    text-align: right;
    font: normal normal normal 64px/77px Helvetica Neue;
    font-weight: 600;
    letter-spacing: 0px;
    color: ${(props) => props.theme.FONT_COLOR};

    @media (max-width: ${size.mobileL}) {
        font-size: 36px;
    }
`;
export const ExpressionWrapper = styled(ValueWrapper)
`
    min-height: 80px;
    padding-top: 0;
    padding-bottom: 0;
`;

export const Expression = styled(Value)
`
    font-size: 35px;
    opacity: 0.3;
`;

export const Border = styled.div `
    width: 95%;
    height: 2px;
    background: ${(props) => props.theme.BORDER_COLOR};
    margin-right: 25px;
    margin-left: 25px;

    @media (max-width: ${size.tablet}) {
        margin: 0;
        width: 100%;
    }
`;
