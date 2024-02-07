import {Link} from 'react-router-dom'
import {
  AiFillHome,
  AiTwotoneFire,
  GiGamepad,
  MdPlaylistAdd,
} from 'react-icons/all'
import {
  NavigationMenu,
  MenuTab,
  TabName,
  SocialMediaAndContactUs,
  ContactUs,
  SocialMediaContainer,
  AnchorMediaIcon,
  MediaImage,
  NavigationContainerDescription,
  NavigationMenuContainer,
} from './style'
import ThemeContext from '../../Context/ThemeContext'
import '../Header/index.css'
import './index.css'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const onTabSelection = () => {
        document.body.classList.remove('over-flow')
      }

      // Finding Pathname using location property of the document object, with the pathname property of the location object.
      const isActivePath = path => document.location.pathname === path

      const navMenuTabsContent = [
        {
          id: 'menu-tab-1',
          path: '/',
          route: 'Home',
          icon: (
            <AiFillHome
              className="menu-tab-icon"
              color={isActivePath('/') ? '#de1414' : '#737070'}
            />
          ),
        },
        {
          id: 'menu-tab-2',
          path: '/trending',
          route: 'Trending',
          icon: (
            <AiTwotoneFire
              className="menu-tab-icon"
              color={isActivePath('/trending') ? '#de1414' : '#737070'}
            />
          ),
        },
        {
          id: 'menu-tab-3',
          path: '/gaming',
          route: 'Gaming',
          icon: (
            <GiGamepad
              className="menu-tab-icon"
              color={isActivePath('/gaming') ? '#de1414' : '#737070'}
            />
          ),
        },
        {
          id: 'menu-tab-4',
          path: '/saved-videos',
          route: 'Saved Videos',
          icon: (
            <MdPlaylistAdd
              className="menu-tab-icon"
              color={isActivePath('/saved-videos') ? '#de1414' : '#737070'}
            />
          ),
        },
      ]

      return (
        <NavigationMenuContainer theme={isDarkTheme}>
          {/* navigation menu tabs component */}
          <NavigationMenu>
            {/* Iterating over the `navMenuTabsContent` to create navigation menu */}
            {navMenuTabsContent.map(menuObject => (
              <MenuTab
                key={menuObject.id}
                isActive={isActivePath(menuObject.path)}
                theme={isDarkTheme}
                onClick={onTabSelection}
              >
                <Link to={menuObject.path} className="menu-link-item">
                  {menuObject.icon}
                  <TabName
                    isActive={isActivePath(menuObject.path)}
                    theme={isDarkTheme}
                  >
                    {menuObject.route}
                  </TabName>
                </Link>
              </MenuTab>
            ))}
          </NavigationMenu>

          <SocialMediaAndContactUs>
            <ContactUs theme={isDarkTheme}>CONTACT US</ContactUs>
            <SocialMediaContainer>
              <AnchorMediaIcon href="#">
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </AnchorMediaIcon>
              <AnchorMediaIcon href="#">
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </AnchorMediaIcon>
              <AnchorMediaIcon href="#">
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </AnchorMediaIcon>
            </SocialMediaContainer>
            <NavigationContainerDescription theme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </NavigationContainerDescription>
          </SocialMediaAndContactUs>
        </NavigationMenuContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
