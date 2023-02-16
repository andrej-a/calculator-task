import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { EMPTY_HISTORY_TITLE, HISTORY_TITLE } from '@/constants';

import { Border, HistoryItem, HistoryItemWrapper, HistoryWrapper, ItemsWrapper, Title, TitleWrapper } from './styles';

const History = () => {
    const {history, showHistory} = useSelector(state => state.historyStore);
    const { t } = useTranslation();

    const historyItems = history.map(({ display, id }) => {
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
            <Title>{historyItems.length ? t(HISTORY_TITLE) : t(EMPTY_HISTORY_TITLE)}</Title>
          </TitleWrapper>

          <ItemsWrapper>{historyItems}</ItemsWrapper>
        </HistoryWrapper>
      </React.Fragment>
    );
};

export default History;
