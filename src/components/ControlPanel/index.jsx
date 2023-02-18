import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { HIDE_HISTORY,SHOW_HISTORY } from "@/constants";
import { switchHistory } from "@/redux/actions/history";
import historySelector from "@/redux/selectors/historySelector";

import { ToggleHistoryButton,Wrapper } from "./styles";

const ControlPanel = () => {
    const dispatch = useDispatch();
    const { showHistory } = useSelector(historySelector);
    const { t } = useTranslation();

    const toggleManager = () => {
        dispatch(switchHistory);
    };
    return(
      <Wrapper>
        <ToggleHistoryButton
          onClick={toggleManager}>
          {showHistory ? t(HIDE_HISTORY) : t(SHOW_HISTORY)}
        </ToggleHistoryButton>
      </Wrapper>
    );
};

export default ControlPanel;
