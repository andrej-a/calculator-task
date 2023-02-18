import React from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import {
    CLEAR_HISTORY_BUTTON,
    DEFAULT_APPLICATION_LANGUAGE,
    ENGLISH_LANGUAGE,
    LIGHT_THEME_TITLE_RU,
    RUSSIAN_LANGUAGE,
    SETTINGS_TITLE,
} from '@/constants';
import selects from '@/constants/selects';
import * as historyActions  from '@/redux/actions/history';

import SelectComponent from './SelectComponent';
import { ClearHistoryButton, LabelWrapper, SettingsWrapper, Title, TitleWrapper } from './styles';

class Settings extends React.Component {
    render() {
        const { history, clearHistory, themeTitle, t } = this.props;
        const LANGUAGE_SELECTOR_TITLE = i18next.language === DEFAULT_APPLICATION_LANGUAGE
            ? ENGLISH_LANGUAGE : RUSSIAN_LANGUAGE;

        const THEME_SELECTOR_TITLE = (themeTitle === "LightTheme" || themeTitle === LIGHT_THEME_TITLE_RU)
            ? "LightTheme" : "DarkTheme";

        const settingsManager = () => {
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
              onClick={settingsManager}>
              {t(CLEAR_HISTORY_BUTTON)}
            </ClearHistoryButton>
          </SettingsWrapper>
        );
    }
}

Settings.propTypes = {
    history: PropTypes.arrayOf().isRequired,
    themeTitle: PropTypes.string.isRequired
};

const mapStateToProps = ({ historyStore, theme }) => {
    return {
        history: historyStore.history,
        themeTitle: theme.themeValue
    };
};

export default withTranslation()(connect(mapStateToProps, historyActions)(Settings));
