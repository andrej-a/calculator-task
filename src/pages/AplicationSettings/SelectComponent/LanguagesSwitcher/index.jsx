import React from 'react';
import { useTranslation } from 'react-i18next';

import fakeLanguagesData from '@/constants/fakeLanguagesData';

import Options from '../Theme/styles';

const LanguagesSwitcher = ({ onSetIsOpen }) => {
    const { t, i18n } = useTranslation();

    const languageManager = language => () => {
        i18n.changeLanguage(language);
        onSetIsOpen();
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
