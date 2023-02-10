import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { DarkTheme, DEFAULT_THEME_VALUE, LightTheme } from '@/constants';
import fakeThemeData from '@/constants/fakeThemeData';
import { changeTheme, changeThemeValue } from '@/redux/actions/actions';

import Options from './styles';

const Theme = props => {
    const dispatch = useDispatch();
    const {onSetIsOpen} = props;
    const { t } = useTranslation();

    const componentController = value => () => {
        const theme = value === DEFAULT_THEME_VALUE ? LightTheme : DarkTheme;
        dispatch(changeTheme(theme));
        dispatch(changeThemeValue(t(value)));
        onSetIsOpen();
    };

    const options = fakeThemeData.map(data => {
        const { id, value } = data;
        return (
          <Options
            data-test={value}
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
