import React from 'react';

import LanguagesSwitcher from '@/pages/AplicationSettings/SelectComponent/LanguagesSwitcher';
import Theme from '@/pages/AplicationSettings/SelectComponent/Theme';

import { LABEL_TITLE, SWITCH_LANGUAGE } from './componentsConstants';

const selectsData = [
    {
        labelHtmlFor: 'theme',
        labelTitle: LABEL_TITLE,
        dataTestValue: 'theme_button',
        renderProps: onSetIsOpen => <Theme onSetIsOpen={onSetIsOpen} />,
    },
    {
        labelHtmlFor: 'language',
        labelTitle: SWITCH_LANGUAGE,
        dataTestValue: 'language_button',
        renderProps: onSetIsOpen => <LanguagesSwitcher onSetIsOpen={onSetIsOpen} />,
    },
];

export default selectsData;
