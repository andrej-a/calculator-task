import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_HISTORY, SHOW_HISTORY } from '@/constants';
import { switchMenu, switchHistory } from '@/redux/actions/actions';
import { ShowHistory } from './styles';

const HistoryToggler = () => {
    const dispatch = useDispatch();
    const {showHistory} = useSelector(state => state.main);

    const togglerManager = () => {
        dispatch(switchMenu)
        dispatch(switchHistory)
    }

    return (
      <ShowHistory
        onClick={togglerManager}>
        {showHistory ? HIDE_HISTORY : SHOW_HISTORY}
      </ShowHistory>
    );
};

export default HistoryToggler;
