import styled from 'styled-components'

export const PopupContainer = styled.div`
  width: 50%;
`
export const LogoutButton = styled.button`
  height: 35px;
  color: ${props => (props.darkMode ? '#3b82f6' : '#ffffff')};
  background-color: transparent;
  border: 2px solid ${props => (props.darkMode ? '#3b82f6' : '#ffffff')};
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
  background-color: ${props => (props.darkMode ? '#1e293b' : '#ffffff')};
  min-height: 30vh;
  border: none;
  border-radius: 20px;
`
export const WarningMessage = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#00306e')};
  font-size: 18px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  width: 50%;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: 2px solid #94a3b8;
  color: #64748b;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
`
export const ConfirmButton = styled(CancelButton)`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
`
