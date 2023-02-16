import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { HIDE_HISTORY,SHOW_HISTORY } from "@/constants";
import { switchHistory } from "@/redux/actions";
import historySelector from "@/redux/selectors/historySelector";

import { ControlPanelWrapper, ToggleHistoryButton } from "./styles";

const ControlPanel = () => {
    const dispatch = useDispatch();
    const { showHistory } = useSelector(historySelector);
    const { t } = useTranslation();

    const toggleManager = () => {
        dispatch(switchHistory);
    };
    return(
      <ControlPanelWrapper>
        <ToggleHistoryButton
          onClick={toggleManager}>
          {showHistory ? t(HIDE_HISTORY) : t(SHOW_HISTORY)}
        </ToggleHistoryButton>
      </ControlPanelWrapper>
    );
};

export default ControlPanel;
