import styled from 'styled-components';

const ApplicationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: ${props => props.theme.widthOptions.width};
    max-width: ${props => props.theme.widthOptions.maxWidth};
    height: ${props => props.theme.widthOptions.autoHeight};
    max-height: ${props => props.theme.widthOptions.fullScreenHeight};
`;

export default ApplicationWrapper;
