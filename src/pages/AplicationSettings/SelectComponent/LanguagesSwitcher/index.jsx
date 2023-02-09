import React from 'react';
import { useTranslation } from 'react-i18next';

import fakeLanguagesData from '@/constants/fakeLanguagesData';

import Options from '../Theme/styles';

const LanguagesSwitcher = props => {
    const { t, i18n } = useTranslation();
    const { onSetIsOpen } = props;

    const languageManager = language => () => {
        i18n.changeLanguage(language);
        onSetIsOpen();
    };

    const options = fakeLanguagesData.map(data => {
        const { id, value, title } = data;
        return (
          <Options
            data-test={value}
            key={id}
            onClick={languageManager(value)}
            >
            {t(title)}
          </Options>
        );
    });

    return (
      <React.Fragment>
        {options}
      </React.Fragment>
    );
};

export default LanguagesSwitcher;
