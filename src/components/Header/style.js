import styled from 'styled-components'

export const NavBar = styled.nav`
  width: 100%;
  height: 60px;
  padding-top: 6px;
  padding-bottom: 6px;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.darkMode ? ' #ffffff' : '#313131')};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavContent = styled.div`
  width: 92%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WebsiteLogo = styled.img`
  height: 26px;
  width: 96px;
`
export const MobileNavigationMenu = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: -100%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  transition: transform 0.5s ease-in, background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const MenuCloseIconBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px 20px;

  cursor: pointer;
  align-self: flex-end;
  transition: color 0.3s ease-in, transform 0.5s ease-in;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`
export const NavigationMenuContainer = styled.div`
  justify-content: center;
`

export const MobileNavItemsContainer = styled.ul`
  padding-left: 0;
  padding-top: 6px;

  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MobileNavItem = styled.li`
  list-style-type: none;

  margin-right: 4px;
`

export const MobileNavItemBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const NavItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NavIconBtn = styled.button`
  border: none;
  padding-top: 7px;
  margin-right: 10px;

  background-color: transparent;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
