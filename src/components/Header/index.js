import {Link} from 'react-router-dom'
import {BsMoon, BiSun, GiHamburgerMenu, MdClose} from 'react-icons/all'
import NavigationMenu from '../NavigationMenu'
import LogoutPopup from '../LogoutPopup'
import LogoutMobilePopup from '../LogoutMobilePopup'

import ThemeContext from '../../Context/ThemeContext'
import {
  NavBar,
  WebsiteLogo,
  NavContent,
  MobileNavItemsContainer,
  MobileNavItem,
  MobileNavItemBtn,
  NavItemsContainer,
  NavIconBtn,
  ProfileImage,
  MobileNavigationMenu,
  NavigationMenuContainer,
  MenuCloseIconBtn,
} from './style'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const toggleSideBar = () => {
        document
          .getElementById('mobileNavigationMenu')
          .classList.toggle('translate-menu')
        document
          .getElementById('menuCloseIcon')
          .classList.toggle('rotate-close-icon')
        document.body.classList.toggle('over-flow')
      }

      const renderMobileMenu = () => (
        <MobileNavigationMenu id="mobileNavigationMenu" theme={isDarkTheme}>
          <MenuCloseIconBtn
            id="menuCloseIcon"
            type="button"
            onClick={toggleSideBar}
            theme={isDarkTheme}
          >
            <MdClose className="nav-item-icon" />
          </MenuCloseIconBtn>
          <NavigationMenuContainer>
            <NavigationMenu />
          </NavigationMenuContainer>
        </MobileNavigationMenu>
      )

      const renderMobileNavItems = () => (
        <MobileNavItemsContainer theme={isDarkTheme}>
          <MobileNavItem>
            <MobileNavItemBtn onClick={onToggleTheme} data-testid="theme">
              {isDarkTheme ? (
                <BsMoon className="nav-item-icon" />
              ) : (
                <BiSun className="dark-theme nav-item-icon" />
              )}
            </MobileNavItemBtn>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavItemBtn type="button" onClick={toggleSideBar}>
              <GiHamburgerMenu
                className={
                  isDarkTheme ? 'nav-item-icon' : 'dark-theme nav-item-icon'
                }
              />
            </MobileNavItemBtn>
          </MobileNavItem>
          <MobileNavItem>{renderMobileMenu()}</MobileNavItem>
          <LogoutMobilePopup />
        </MobileNavItemsContainer>
      )

      const renderNavItems = () => (
        <NavItemsContainer theme={isDarkTheme}>
          <NavIconBtn onClick={onToggleTheme} data-testid="theme">
            {isDarkTheme ? (
              <BsMoon className="md-nav-item-icon" />
            ) : (
              <BiSun className="dark-theme md-nav-item-icon" />
            )}
          </NavIconBtn>
          <NavIconBtn>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
          </NavIconBtn>
          <LogoutPopup />
        </NavItemsContainer>
      )

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      return (
        <NavBar darkMode={isDarkTheme}>
          <NavContent>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            {renderMobileNavItems()}
            {renderNavItems()}
          </NavContent>
        </NavBar>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
