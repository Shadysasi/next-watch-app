import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/all'
import Cookies from 'js-cookie'
import ThemeContext from '../../Context/ThemeContext'
import {
  PopupContainer,
  ModalContainer,
  WarningMessage,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './style'

import 'reactjs-popup/dist/index.css'

const LogoutPopup = props => {
  const onLogoutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <PopupContainer>
            <Popup
              modal
              trigger={
                isDarkTheme ? (
                  <FiLogOut color="#000000" />
                ) : (
                  <FiLogOut color="#ffffff" />
                )
              }
            >
              {close => (
                <ModalContainer darkMode={isDarkTheme}>
                  <WarningMessage darkMode={isDarkTheme}>
                    Are you sure, you want to logout
                  </WarningMessage>
                  <ButtonsContainer>
                    <CancelButton type="button" outline onClick={() => close()}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onLogoutClicked}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </PopupContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(LogoutPopup)
