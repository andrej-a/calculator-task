import styled from 'styled-components';

import size from '@/constants/sizes';

const { laptop, tablet} = size;

export const DisplayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: ${props => props.theme.widthOptions.width};
    overflow-y: auto;

`;

export const ValueWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    max-height: 250px;
    padding: 0px 106px 10px 64px;

    overflow-x: auto;
    overflow-y: auto;

    @media (max-width: ${ laptop }) {
        padding: 10px;
    }

    @media (max-width: ${ tablet }) {
        padding: 0;
        padding-right: 20px;
        max-height: 125px;
    }
`;

export const Value = styled.p`
    width: 100%;
    height: auto;

    text-align: right;
    font: normal normal normal 64px/77px Helvetica Neue;
    font-weight: 600;
    letter-spacing: 0px;
    color: ${props => props.theme.FONT_COLOR};

    @media (max-width: ${ tablet }) {
        font-size: 34px;
        letter-spacing: -2px;
        line-height: 40px;
    }
`;
export const ExpressionWrapper = styled(ValueWrapper)`
    min-height: 80px;
    padding-top: 0;
    padding-bottom: 0;

    @media (max-width: ${ tablet }) {
        padding-right: 20px;
        min-height: auto;
        height: 40px;
    }
`;

export const Expression = styled(Value)`
    font-size: 35px;
    opacity: 0.3;

    @media (max-width: ${ tablet }) {
        font-size: 35px;
        overflow-y: hidden;
    }

`;

export const Border = styled.div`
    width: 95%;
    height: 2px;
    background: ${props => props.theme.BORDER_COLOR};
    margin-right: 25px;
    margin-left: 25px;

    @media (max-width: ${ tablet }) {
        margin: 0;
        width: 100%;
    }
`;
