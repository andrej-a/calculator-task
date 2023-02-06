import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { CLEAR_HISTORY_BUTTON, LABEL_TITLE, SETTINGS_TITLE, DEFAULT_APPLICATION_LANGUAGE } from '@/constants';
import * as actions from '@/redux/actions/actions';
import i18next from 'i18next';
import SelectComponent from './SelectComponent';
import { ClearHistoryButton, LabelWrapper, SettingsWrapper, Title, TitleWrapper } from './styles';
import { Theme } from './SelectComponent/Theme';
import { LanguagesSwitcher } from './SelectComponent/LanguagesSwitcher';

class Settings extends React.Component {
    render() {
        const { history, clearAllData, themeTitle, t } = this.props;
        const LANGUAGE_SELECTOR_TITLE = i18next.language === DEFAULT_APPLICATION_LANGUAGE ? "Russian" : "English";
        const THEME_SELECTOR_TITLE = themeTitle === "Light theme" || themeTitle === "Светлая тема" ? "LightTheme" : "DarkTheme"

        return (
          <SettingsWrapper>
            <TitleWrapper>
              <Title>{t(SETTINGS_TITLE)}</Title>
            </TitleWrapper>

            <LabelWrapper>
              <label htmlFor="theme">{t(LABEL_TITLE)}</label>
            </LabelWrapper>
            <SelectComponent
                title={t(THEME_SELECTOR_TITLE)}
                render={(onSetIsOpen) => <Theme onSetIsOpen={onSetIsOpen} />}
            />

             <LabelWrapper>
              <label htmlFor="language">{t("SwitchLanguage")}</label>
            </LabelWrapper>
            <SelectComponent
                title={t(LANGUAGE_SELECTOR_TITLE)}
                render={(onSetIsOpen) => <LanguagesSwitcher onSetIsOpen={onSetIsOpen} />}
            />

             <ClearHistoryButton
              data-test="clearHistory" disabled={!history.length}
              onClick={clearAllData}>
              {t(CLEAR_HISTORY_BUTTON)}
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

export default withTranslation()(connect(mapStateToProps, actions)(Settings));
