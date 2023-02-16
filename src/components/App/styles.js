import styled from 'styled-components';

const ApplicationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: ${props => props.theme.widthOptions.fullScreen};
    max-width: ${props => props.theme.widthOptions.desktop};
    height: ${props => props.theme.heightOptions.autoHeight};
    max-height: ${props => props.theme.heightOptions.maxApplicationHeight};
`;

export default ApplicationWrapper;
