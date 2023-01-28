import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { CLEAR_HISTORY_BUTTON, LABEL_TITLE, SETTINGS_TITLE } from '@/constants'
import * as actions from '@/redux/actions/actions'

import SelectComponent from './SelectComponent'
import { ClearHistoryButton, LabelWrapper, SettingsWrapper, Title, TitleWrapper } from './styles'

class Settings extends React.Component {
  render () {
    const { history, clearAllData } = this.props
    return (
      <SettingsWrapper>
        <TitleWrapper>
          <Title>{SETTINGS_TITLE}</Title>
        </TitleWrapper>

        <LabelWrapper>
          <label htmlFor='theme'>{LABEL_TITLE}</label>
        </LabelWrapper>

        <SelectComponent />
        <ClearHistoryButton
          data-test='clearHistory' disabled={!history.length}
          onClick={clearAllData}>
          {CLEAR_HISTORY_BUTTON}
        </ClearHistoryButton>
      </SettingsWrapper>
    )
  }
}

Settings.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
  clearAllData: PropTypes.func,
}

const mapStateToProps = ({ history }) => ({
  history,
})

export default connect(mapStateToProps, actions)(Settings)
