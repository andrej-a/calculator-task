import React from 'react';

import DisplayClasses from '@/components/Display/DisplayClasses';
import HistoryClasses from '@/components/History/HistoryClasses';
import KeypadClasses from '@/components/Keypad/KeypadClasses';
import controller from '@/utils/controller';

import { DisplayKeypadWrapper, HomeWrapper } from '../HomeFunctional/styles';

class HomeClassComponent extends React.Component {
    render() {
        return (
            <HomeWrapper>
                <DisplayKeypadWrapper>
                    <DisplayClasses />
                    <KeypadClasses controller={controller} />
                </DisplayKeypadWrapper>
                <HistoryClasses />
            </HomeWrapper>
        );
    }
}

export default HomeClassComponent;
