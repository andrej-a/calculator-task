import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
/* STYLES */
import { SettingsWrapper, TitleWrapper, Title, LabelWrapper, ClearHistoryButton } from './components'
/* CONSTANTS */
import { SETTINGS_TITLE, LABEL_TITLE, CLEAR_HISTORY_BUTTON } from '@/constants'
/* COMPONENTS */
import SelectComponent from './SelectComponent/Select'
/* ACTIONS */
import * as actions from '@/actions/actions'

class Settings extends React.Component {
  render() {
    const { theme, history, clearAllData } = this.props
    return (
      <SettingsWrapper theme={theme}>
        <TitleWrapper>
          <Title theme={theme}>{SETTINGS_TITLE}</Title>
        </TitleWrapper>

        <LabelWrapper theme={theme}>
          <label htmlFor="theme">{LABEL_TITLE}</label>
        </LabelWrapper>

        <SelectComponent />
        <ClearHistoryButton disabled={!history.length} theme={theme}
          onClick={() => clearAllData()}
          className="clear">{CLEAR_HISTORY_BUTTON}
        </ClearHistoryButton>
      </SettingsWrapper>
    )
  }
}

Settings.propTypes = {
  theme: PropTypes.exact({
    MAIN_BACKGROUND_COLOR: PropTypes.string,
    MAIN_COLOR: PropTypes.string,
    BORDER_COLOR: PropTypes.string,
    SECOND_BORDER_COLOR: PropTypes.string,
    FONT_COLOR: PropTypes.string,
    SECOND_FONT_COLOR: PropTypes.string,
    BUTTON_BACKGROUND_COLOR: PropTypes.string,
    BUTTON_COLOR: PropTypes.string,
    CLEAR_HISTORY_BUTTON_COLOR: PropTypes.string,
  }),
  history: PropTypes.arrayOf(PropTypes.string),
  clearAllData: PropTypes.func,
}


const mapStateToProps = ({ theme, history }) => {
  return {
    theme, history,
  }
}

export default connect(mapStateToProps, actions)(Settings)
