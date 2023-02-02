import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import triangle from '@/assets/image/play.png'
import { DarkTheme,DEFAULT_THEME_VALUE, fakeThemeData , LightTheme } from '@/constants';
import { changeTheme, changeThemeValue } from '@/redux/actions/actions';

import { Options, OptionsWrapper, SelectTitleBox, SelectWrapper } from './styles';

const SelectComponent = () => {
    const dispatch = useDispatch();
    const { themeValue } = useSelector(state => state.theme);
    const [isOpen, setIsOpen] = useState(false);

    const onSetIsOpen = () => {
        setIsOpen(!isOpen);
    };

    const componentController = (value) => () => {
        const theme = value === DEFAULT_THEME_VALUE ? LightTheme : DarkTheme;
        dispatch(changeTheme(theme));
        dispatch(changeThemeValue(value));
        onSetIsOpen();
    }

    const options = fakeThemeData.map(data => {
        const { id, value } = data;
        return (
          <Options
            data-test={value}
            onClick={componentController(value)}
            key={id}>
            {value}
          </Options>
        );
    });

    return (
      <SelectWrapper>
        <SelectTitleBox
          data-test="select"
          onClick={onSetIsOpen}>
          {themeValue}
          <img src={triangle} alt='button'></img>
        </SelectTitleBox>
        {isOpen && <OptionsWrapper>{options}</OptionsWrapper>}
      </SelectWrapper>
    );
};

export default SelectComponent;
