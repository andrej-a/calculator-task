import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { EMPTY_HISTORY_TITLE, HISTORY_TITLE } from '@/constants';

import {
    Border,
    HistoryItem,
    HistoryItemWrapper,
    HistoryWrapper,
    ItemsWrapper,
    Title,
    TitleWrapper
} from '../HistoryFunctional/styles';

class HistoryClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { history, showHistory, t } = this.props;

        const historyItems = history.map(item => {
            const { display, id } = item;
            return (
              <HistoryItemWrapper key={id}>
                <HistoryItem>{display}</HistoryItem>
              </HistoryItemWrapper>
            );
        });

        return (
          <React.Fragment>
            <Border />
            <HistoryWrapper showHistory={showHistory}>
              <TitleWrapper>
                <Title>{history.length ? t(HISTORY_TITLE) : t(EMPTY_HISTORY_TITLE)}</Title>
              </TitleWrapper>

              <ItemsWrapper>{historyItems}</ItemsWrapper>
            </HistoryWrapper>
          </React.Fragment>
        );
    }
}

HistoryClasses.propTypes = {
    history: PropTypes.arrayOf().isRequired,
    showHistory: PropTypes.bool.isRequired
};

const mapStateToProps = ({ historyStore }) => ({
    history: historyStore.history,
    showHistory: historyStore.showHistory
});

export default withTranslation()(connect(mapStateToProps)(HistoryClasses));
