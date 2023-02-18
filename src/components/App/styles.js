import styled from 'styled-components';

const ApplicationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: ${({ theme: { widthOptions }}) => widthOptions.fullScreen};
    max-width: ${({ theme: { widthOptions }}) => widthOptions.desktop};
    height: ${({ theme: { heightOptions }}) => heightOptions.autoHeight};
    max-height: ${({ theme: { heightOptions }}) => heightOptions.maxApplicationHeight};
`;

export default ApplicationWrapper;
