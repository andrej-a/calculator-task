import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

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
    history: PropTypes.arrayOf(PropTypes.object),
    showHistory: PropTypes.bool
};

const mapStateToProps = ({ main }) => ({
    history: main.history,
    showHistory: main.showHistory
});

export default withTranslation()(connect(mapStateToProps)(HistoryClasses));
