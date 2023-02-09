import styled from 'styled-components';

import { size } from '@/constants/sizes';

const { mobileL } = size;

const ApplicationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    max-width: 1920px;
    height: auto;
    min-height: 100vh;
`;

export default ApplicationWrapper;
