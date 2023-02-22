import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: ${({ theme: { padding } }) => padding[10]}px;
`;
export const ErrorTitle = styled.h2`
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    text-align: center;
`;
