import React from 'react';

import HistoryClasses from '@/components/HistoryClasses';

import { DisplayKeypadWrapper, HoumeWrapper } from './styles';

class HomeClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showHistory } = this.props;
        return (
            <HoumeWrapper>
                <DisplayKeypadWrapper />
                <HistoryClasses />
            </HoumeWrapper>
        );
    }
}

export default HomeClassComponent;
