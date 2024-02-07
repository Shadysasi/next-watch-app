import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../Context/ThemeContext'
import {
  LoginContainer,
  LoginFormContainer,
  Logo,
  LogoContainer,
  InputLabelContainer,
  Label,
  InputBox,
  CheckBoxLabelContainer,
  CheckBox,
  LoginButton,
  ErrorMsg,
} from './style'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    isShown: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPasswordClicked = () => {
    this.setState(prevState => ({isShown: !prevState.isShown}))
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(fetchedData.jwt_token)
    } else {
      this.onSubmitFailure(fetchedData.error_msg)
    }
  }

  render() {
    const {username, password, showErrorMsg, errorMsg, isShown} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginContainer darkMode={isDarkTheme}>
              <LoginFormContainer
                onSubmit={this.submitForm}
                darkMode={isDarkTheme}
              >
                <LogoContainer>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </LogoContainer>
                <InputLabelContainer>
                  <Label htmlFor="username" darkMode={isDarkTheme}>
                    USERNAME
                  </Label>
                  <InputBox
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </InputLabelContainer>
                <InputLabelContainer>
                  <Label htmlFor="password" darkMode={isDarkTheme}>
                    PASSWORD
                  </Label>
                  <InputBox
                    id="password"
                    type={isShown ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </InputLabelContainer>
                <CheckBoxLabelContainer>
                  <CheckBox
                    type="checkbox"
                    id="checkbox"
                    checked={isShown}
                    onClick={this.onShowPasswordClicked}
                  />
                  <Label htmlFor="checkbox" darkMode={isDarkTheme}>
                    Show Password
                  </Label>
                </CheckBoxLabelContainer>

                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>{`* ${errorMsg}`}</ErrorMsg>}
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
