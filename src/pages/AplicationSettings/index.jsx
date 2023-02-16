import i18next from 'i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import {
    CLEAR_HISTORY_BUTTON,
    DEFAULT_APPLICATION_LANGUAGE,
    ENGLISH_LANGUAGE,
    LIGHT_THEME_TITLE_EN,
    LIGHT_THEME_TITLE_RU,
    RUSSIAN_LANGUAGE,
    SETTINGS_TITLE,
} from '@/constants';
import selects from '@/constants/selects';
import * as actions from '@/redux/actions';

import SelectComponent from './SelectComponent';
import { ClearHistoryButton, LabelWrapper, SettingsWrapper, Title, TitleWrapper } from './styles';

class Settings extends React.Component {
    render() {
        const { history, clearAllData, clearHistory, themeTitle, t } = this.props;
        const LANGUAGE_SELECTOR_TITLE = i18next.language === DEFAULT_APPLICATION_LANGUAGE
            ? RUSSIAN_LANGUAGE : ENGLISH_LANGUAGE;
        const THEME_SELECTOR_TITLE = themeTitle === LIGHT_THEME_TITLE_EN || themeTitle === LIGHT_THEME_TITLE_RU
            ? "LightTheme" : "DarkTheme";

        const infoManager = () => {
            clearAllData();
            clearHistory();
        };

        return (
          <SettingsWrapper>
            <TitleWrapper>
              <Title>{t(SETTINGS_TITLE)}</Title>
            </TitleWrapper>

            {selects.map(({labelHtmlFor, labelTitle, dataTestValue, renderProps}) => {
                return (
                  <React.Fragment key={labelTitle}>
                    <LabelWrapper>
                      <label htmlFor={labelHtmlFor}>{t(labelTitle)}</label>
                    </LabelWrapper>
                    <SelectComponent
                      title={t(labelHtmlFor === 'theme' ? THEME_SELECTOR_TITLE : LANGUAGE_SELECTOR_TITLE)}
                      dataTest={dataTestValue}
                      render={renderProps}
                    />
                  </React.Fragment>
                );
            })}

            <ClearHistoryButton
              data-test="clearHistory" disabled={!history.length}
              onClick={infoManager}>
              {t(CLEAR_HISTORY_BUTTON)}
            </ClearHistoryButton>
          </SettingsWrapper>
        );
    }
}

Settings.propTypes = {
    history: PropTypes.arrayOf(PropTypes.shape).isRequired,
    clearAllData: PropTypes.func.isRequired,
    themeTitle: PropTypes.string.isRequired
};

const mapStateToProps = ({ historyStore, theme }) => {
    return {
        history: historyStore.history,
        themeTitle: theme.themeValue
    };
};

export default withTranslation()(connect(mapStateToProps, actions)(Settings));
