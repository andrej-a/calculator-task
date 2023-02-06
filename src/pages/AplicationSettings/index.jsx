import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { CLEAR_HISTORY_BUTTON, LABEL_TITLE, SETTINGS_TITLE } from '@/constants';
import * as actions from '@/redux/actions/actions';

import SelectComponent from './SelectComponent';
import { ClearHistoryButton, LabelWrapper, SettingsWrapper, Title, TitleWrapper } from './styles';
import { Theme } from './SelectComponent/Theme';
import { LanguagesSwitcher } from './SelectComponent/LanguagesSwitcher';
class Settings extends React.Component {
    render() {
        const { history, clearAllData, themeTitle } = this.props;
        return (
          <SettingsWrapper>
            <TitleWrapper>
              <Title>{SETTINGS_TITLE}</Title>
            </TitleWrapper>

            <LabelWrapper>
              <label htmlFor="theme">{LABEL_TITLE}</label>
            </LabelWrapper>
            <SelectComponent
                title={themeTitle}
                render={(onSetIsOpen) => <Theme onSetIsOpen={onSetIsOpen} />}
            />

             <LabelWrapper>
              <label htmlFor="language">Язык</label>
            </LabelWrapper>
            <SelectComponent
                title={'Russian'}
                render={(onSetIsOpen) => <LanguagesSwitcher onSetIsOpen={onSetIsOpen}/>}
            />

             <ClearHistoryButton
              data-test="clearHistory" disabled={!history.length}
              onClick={clearAllData}>
              {CLEAR_HISTORY_BUTTON}
            </ClearHistoryButton>
          </SettingsWrapper>
        );
    }
}

Settings.propTypes = {
    history: PropTypes.arrayOf(PropTypes.object),
    clearAllData: PropTypes.func,
    themeTitle: PropTypes.string
};

const mapStateToProps = ({ main, theme }) => {
    return {
        history: main.history,
        themeTitle: theme.themeValue
    }
};

export default connect(mapStateToProps, actions)(Settings);
