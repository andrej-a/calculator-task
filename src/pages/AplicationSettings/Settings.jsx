import React from 'react'
import { connect } from 'react-redux'
/* STYLES */
import { SettingsWrapper, TitleWrapper, Title, LabelWrapper, ClearHistoryButton } from './components'
/* CONSTANTS */
import { SETTINGS_TITLE, LABEL_TITLE, CLEAR_HISTORY_BUTTON } from '@/constants'
/* COMPONENTS */
import SelectComponent from './SelectComponent/Select'

class Settings extends React.Component {
  render() {
    const { theme, history } = this.props
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
          className="clear">{CLEAR_HISTORY_BUTTON}
        </ClearHistoryButton>
      </SettingsWrapper>
    )
  }
}

const mapStateToProps = ({ theme, history }) => {
  return {
    theme, history,
  }
}

export default connect(mapStateToProps)(Settings)
