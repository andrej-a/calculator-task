import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { EMPTY_HISTORY_TITLE, HISTORY_TITLE } from '@/constants';
import historySelector from '@/redux/selectors/historySelector';

import { HistoryItem, HistoryItemWrapper, HistoryWrapper, ItemsWrapper, Title, TitleWrapper } from '../styles';

const History = () => {
    const { history, showHistory } = useSelector(historySelector);
    const { t } = useTranslation();

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
};

export default History;
