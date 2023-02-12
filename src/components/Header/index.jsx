import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HEADER_TITLE } from '@/constants/componentsConstants';
import { switchMenu } from '@/redux/actions/actions';

import HistoryToggler from './HistoryToggler';
import { Burger, BurgerWrapper, LinksWrapper, Title, TitleWrapper, Wrapper } from './styles';

const Header = props => {
    const { children } = props;
    const dispatch = useDispatch();
    const menu = useSelector(state => state.main.menu);

    const onHandleMenu = () => {
        dispatch(switchMenu);
    };

    return (
      <Wrapper>
        <TitleWrapper>
          <Title>{HEADER_TITLE}</Title>
        </TitleWrapper>

        <BurgerWrapper onClick={onHandleMenu}>
          <Burger />
        </BurgerWrapper>

        <LinksWrapper showMenu={menu}>
          {children}
          <HistoryToggler />
        </LinksWrapper>
      </Wrapper>
    );
};

export default Header;
