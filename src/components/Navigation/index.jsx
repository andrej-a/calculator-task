import React from "react"
import links from "@/constants/links"
import { useDispatch } from "react-redux";
import { switchMenu } from "@/redux/actions/actions";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { activeStyle, nonActive } from "@/constants";
import { PageLink } from "./styles";

export const Navigation = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onHandleMenu = () => {
        dispatch(switchMenu)
    }

    const navigation = links.map(({ link, data_test, title }) => {
        return <NavLink
            key={title}
            to={link}
            style={({ isActive }) => (isActive ? activeStyle : nonActive)}
            end
            onClick={onHandleMenu}>
            <PageLink data-test={data_test}>{t(title)}</PageLink>
        </NavLink>
    })

    return navigation
}
