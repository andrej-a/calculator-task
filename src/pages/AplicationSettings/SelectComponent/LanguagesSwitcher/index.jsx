import React from 'react';
import { instance as alertor } from 'alertor-library';
import { useTranslation } from 'react-i18next';

import alertorSettings from '@/constants/alertor';
import { CHANGE_LANG_ALERT } from '@/constants/componentsConstants';
import fakeLanguagesData from '@/constants/fakeLanguagesData';

import Options from '../Theme/styles';

const LanguagesSwitcher = ({ onSetIsOpen }) => {
    const { t, i18n } = useTranslation();

    const languageManager = language => () => {
        i18n.changeLanguage(language);
        onSetIsOpen();
        alertor.addAlert({
            ...alertorSettings,
            type: 'alert',
            title: `${t(CHANGE_LANG_ALERT)}`,
            description: `${language === 'ru' ? 'Русский' : 'English'}`,
        });
    };

    return (
        <React.Fragment>
            {fakeLanguagesData.map(({ id, value, title }) => {
                return (
                    <Options
                        data-test={value}
                        key={id}
                        onClick={languageManager(value)}
                    >
                        {t(title)}
                    </Options>
                );
            })}
        </React.Fragment>
    );
};

export default LanguagesSwitcher;
