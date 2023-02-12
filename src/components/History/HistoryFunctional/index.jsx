import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { shallowEqual,useSelector } from 'react-redux';

import { EMPTY_HISTORY_TITLE, HISTORY_TITLE } from '@/constants';

import { Border, HistoryItem, HistoryItemWrapper, HistoryWrapper, ItemsWrapper, Title, TitleWrapper } from './styles';

const History = () => {
    const { history, showHistory } = useSelector(state => state.main, shallowEqual);
    const { t } = useTranslation();
    const historyItems = useMemo(() => {
        return history.map(item => {
            const { display, id } = item;
            return (
              <HistoryItemWrapper key={id}>
                <HistoryItem>{display}</HistoryItem>
              </HistoryItemWrapper>
            );
        });
    }, [history]);

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
