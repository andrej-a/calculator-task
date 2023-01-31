import PropTypes from 'prop-types';
import React from 'react';

import { HIDE_HISTORY, SHOW_HISTORY } from '@/constants';

import { ShowHistory } from './styles';

const HistoryToggler = ({ onSetShowMenu, onSetShowHistory, showMenu, showHistory }) => {
    return (
      <ShowHistory
        onClick={() => {
                onSetShowMenu(!showMenu);
                onSetShowHistory();
            }}>
        {showHistory ? HIDE_HISTORY : SHOW_HISTORY}
      </ShowHistory>
    );
};

export default HistoryToggler;

HistoryToggler.propTypes = {
    showMenu: PropTypes.bool,
    onSetShowMenu: PropTypes.func,
    onSetShowHistory: PropTypes.func,
    showHistory: PropTypes.bool
};
