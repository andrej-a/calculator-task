import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { EMPTY_HISTORY_TITLE, HISTORY_TITLE } from '@/constants';

import {
    HistoryItem,
    HistoryItemWrapper,
    HistoryWrapper,
    ItemsWrapper,
    Title,
    TitleWrapper
} from '../styles';

class HistoryClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { history, showHistory, t } = this.props;

        return (
            <React.Fragment>
                <HistoryWrapper showHistory={showHistory}>
                    <TitleWrapper>
                        <Title>{history.length ? t(HISTORY_TITLE) : t(EMPTY_HISTORY_TITLE)}</Title>
                    </TitleWrapper>

                    <ItemsWrapper>
                        {
                            history.map(({ display, id }) => {
                                return (
                                    <HistoryItemWrapper key={id}>
                                        <HistoryItem>{display}</HistoryItem>
                                    </HistoryItemWrapper>
                                );
                            })
                        }
                    </ItemsWrapper>
                </HistoryWrapper>
            </React.Fragment>
        );
    }
}

HistoryClasses.propTypes = {
    history: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        display: PropTypes.string.isRequired
    }).isRequired).isRequired,
    showHistory: PropTypes.bool.isRequired
};

const mapStateToProps = ({ historyStore }) => ({
    history: historyStore.history,
    showHistory: historyStore.showHistory
});

export default withTranslation()(connect(mapStateToProps)(HistoryClasses));
