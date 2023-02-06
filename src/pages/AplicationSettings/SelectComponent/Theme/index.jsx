import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Options } from './styles';
import { DEFAULT_THEME_VALUE, DarkTheme, LightTheme, fakeThemeData } from '@/constants';
import { changeTheme, changeThemeValue } from '@/redux/actions/actions';
import { useTranslation } from 'react-i18next';
export const Theme = (props) => {
    const dispatch = useDispatch();
    const {onSetIsOpen} = props;
    const { t } = useTranslation();

    const componentController = (value) => () => {
        const theme = value === DEFAULT_THEME_VALUE ? LightTheme : DarkTheme;
        dispatch(changeTheme(theme));
        dispatch(changeThemeValue(t(value)));
        onSetIsOpen();
    }

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
        <>
            {options}
        </>
    )
}
