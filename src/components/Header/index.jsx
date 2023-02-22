import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HEADER_TITLE } from '@/constants/componentsConstants';
import { switchMenu } from '@/redux/actions/expression';
import expressionSelector from '@/redux/selectors/expressionSelector';

import HistorySwitcher from './HistorySwitcher';
import { Burger, BurgerWrapper, HeaderWrapper, LinksWrapper, Title, TitleWrapper } from './styles';

const Header = ({ children }) => {
    const dispatch = useDispatch();
    const { menu } = useSelector(expressionSelector);

    const onHandleMenu = () => {
        dispatch(switchMenu);
    };

    return (
        <HeaderWrapper>
            <TitleWrapper>
                <Title>{HEADER_TITLE}</Title>
            </TitleWrapper>

            <BurgerWrapper onClick={onHandleMenu}>
                <Burger />
            </BurgerWrapper>

            <LinksWrapper showMenu={menu}>
                {children}
                <HistorySwitcher />
            </LinksWrapper>
        </HeaderWrapper>
    );
};

export default Header;
