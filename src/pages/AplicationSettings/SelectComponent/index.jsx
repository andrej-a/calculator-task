import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import triangle from '@/assets/image/play.png';
import { DarkTheme, DEFAULT_THEME_VALUE, fakeThemeData , LightTheme } from '@/constants';
import { changeTheme, changeThemeValue } from '@/redux/actions/actions';

import { Options, OptionsWrapper, SelectTitleBox, SelectWrapper } from './styles';
import { Theme } from './Theme';

const SelectComponent = props => {
    const {title, render} = props;
    const [isOpen, setIsOpen] = useState(false);

    const onSetIsOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
      <SelectWrapper>
        <SelectTitleBox
          data-test="select"
          onClick={onSetIsOpen}>
          {title}
          <img src={triangle} alt='button' />
        </SelectTitleBox>
        {isOpen && <OptionsWrapper>{render(onSetIsOpen)}</OptionsWrapper>}
      </SelectWrapper>
    );
};

export default SelectComponent;
