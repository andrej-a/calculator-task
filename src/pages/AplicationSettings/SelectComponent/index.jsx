import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fakeThemeData } from '@/constants';
import { changeTheme, changeThemeValue } from '@/redux/actions/actions';

import { Options, OptionsWrapper, SelectTitleBox, SelectWrapper } from './styles';

const SelectComponent = () => {
    const dispatch = useDispatch();
    const { themeValue } = useSelector((state) => state);
    const [isOpen, setIsOpen] = useState(false);

    const onSetIsOpen = () => {
        setIsOpen(!isOpen);
    };

    const options = fakeThemeData.map((data) => {
        const { id, value } = data;
        return (
            <Options
                data-test={value}
                onClick={() => {
                    dispatch(changeTheme(value));
                    dispatch(changeThemeValue(value));
                    onSetIsOpen();
                }}
                className="options"
                key={id}>
                {value}
            </Options>
        );
    });

    return (
        <SelectWrapper>
            <SelectTitleBox data-test="select" className="select-box" onClick={onSetIsOpen}>
                <div className="triangle" />
                {themeValue}
            </SelectTitleBox>
            {isOpen && <OptionsWrapper>{options}</OptionsWrapper>}
        </SelectWrapper>
    );
};

export default SelectComponent;
