import React from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';

import links from "@/components/Navigation/config/links";
import { switchMenu } from "@/redux/actions/expression";

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
                end
                onClick={onHandleMenu}>
                {({ isActive }) => (
                    <React.Fragment>
                        <PageLink isActive={isActive} data-test={dataTest}>{t(title)}</PageLink>
                    </React.Fragment>
                )}
            </NavLink>
        );
    });

    return navigation;
};

export default Navigation;
