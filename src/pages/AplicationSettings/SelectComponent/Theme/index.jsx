import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { DEFAULT_THEME_VALUE } from '@/constants';
import fakeThemeData from '@/constants/fakeThemeData';
import { changeTheme, changeThemeValue } from '@/redux/actions';
import { themeOptions } from '@/styles';

import Options from './styles';

const Theme = ({ onSetIsOpen }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const {darkTheme, lightTheme} = themeOptions;

    const componentController = value => () => {
        const theme = value === DEFAULT_THEME_VALUE ? lightTheme : darkTheme;
        dispatch(changeTheme(theme));
        dispatch(changeThemeValue(t(value)));
        onSetIsOpen();
    };

    const options = fakeThemeData.map(({ id, value, testValue }) => {
        return (
          <Options
            data-test={testValue}
            onClick={componentController(value)}
            key={id}>
            {t(value)}
          </Options>
        );
    });


    return (
      <React.Fragment>
        {options}
      </React.Fragment>
    );
};

export default Theme;
