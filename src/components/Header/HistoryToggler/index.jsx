import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { HIDE_HISTORY, SHOW_HISTORY } from '@/constants';
import { switchMenu } from '@/redux/actions';
import { switchHistory } from '@/redux/actions/history';
import historySelector from '@/redux/selectors/historySelector';

import ShowHistory from './styles';

const HistoryToggler = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { showHistory } = useSelector(historySelector);

    const togglerManager = () => {
        dispatch(switchMenu);
        dispatch(switchHistory);
    };

    return (
      <ShowHistory
        onClick={togglerManager}>
        {showHistory ? t(HIDE_HISTORY) : t(SHOW_HISTORY)}
      </ShowHistory>
    );
};

export default HistoryToggler;
