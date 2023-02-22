import React, { useState } from 'react';

import triangle from '@/assets/image/open_selector.png';

import { OptionsWrapper, SelectTitleBox, SelectWrapper } from './styles';

const SelectComponent = props => {
    const { title, render, dataTest } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onSetIsOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <SelectWrapper>
            <SelectTitleBox
                data-test={dataTest}
                onClick={onSetIsOpen}>
                {title}
                <img src={triangle} alt='button' />
            </SelectTitleBox>
            {isOpen && <OptionsWrapper>{render(onSetIsOpen)}</OptionsWrapper>}
        </SelectWrapper>
    );
};

export default SelectComponent;
