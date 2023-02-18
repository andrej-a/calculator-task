import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: ${props => props.theme.padding.errorTitle};
`;
export const ErrorTitle = styled.h2`
    font-size: ${props => props.theme.fontSize.desktop};
    text-align: ${props => props.theme.textAlign.center};
`;
