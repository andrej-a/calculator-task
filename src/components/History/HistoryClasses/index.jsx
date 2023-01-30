import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { EMPTY_HISTORY_TITLE, HISTORY_TITLE } from '@/constants';

import { Border, HistoryItem, HistoryItemWrapper, HistoryWrapper, ItemsWrapper, Title, TitleWrapper } from '../HistoryFunctional/styles';

class HistoryClasses extends React.Component {
  render() {
    const { history, showHistory } = this.props;

    const historyItems = history.map((item) => {
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
        <HistoryWrapper className={showHistory ? 'historyActive' : ''}>
          <TitleWrapper>
            <Title>{history.length ? HISTORY_TITLE : EMPTY_HISTORY_TITLE}</Title>
          </TitleWrapper>

          <ItemsWrapper>{historyItems}</ItemsWrapper>
        </HistoryWrapper>
      </React.Fragment>
    );
  }
}

HistoryClasses.propTypes = {
  history: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  showHistory: PropTypes.bool
};

const mapStateToProps = ({ history, showHistory }) => ({
  history,
  showHistory
});

export default connect(mapStateToProps)(HistoryClasses);
