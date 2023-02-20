import styled from 'styled-components';

const ApplicationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: ${({ theme: { widthOptions } }) => widthOptions[100]}%;
    max-width: ${({ theme: { widthOptions } }) => widthOptions[1920]}px;
    height: auto;
    max-height: ${({ theme: { heightOptions } }) => heightOptions[1080]}px;
`;

export default ApplicationWrapper;
