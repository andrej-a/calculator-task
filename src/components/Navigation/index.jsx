import React from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';

import links from "@/constants/links";
import { switchMenu } from "@/redux/actions/actions";
import { activeStyle, nonActive } from "@/styles";

import PageLink from "./styles";

const Navigation = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onHandleMenu = () => {
        dispatch(switchMenu);
    };

    const navigation = links.map(({ link, dataTest, title }) => {
        return (
          <NavLink
            key={title}
            to={link}
            style={({ isActive }) => (isActive ? activeStyle : nonActive)}
            end
            onClick={onHandleMenu}>
            <PageLink data-test={dataTest}>{t(title)}</PageLink>
          </NavLink>
);
    });

    return navigation;
};

export default Navigation;
