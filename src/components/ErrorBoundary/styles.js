import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: ${({ theme: { padding }}) => padding.errorTitle};
`;
export const ErrorTitle = styled.h2`
    font-size: ${({ theme: { fontSize }}) => fontSize.desktop};
    text-align: ${({ theme: { textAlign }}) => textAlign.center};
`;
