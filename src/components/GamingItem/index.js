import ThemeContext from '../../Context/ThemeContext'
import {
  GameListItem,
  NavLink,
  ThumbnailImg,
  AboutContainer,
  GameTitle,
  ViewsText,
} from './style'

const GamingItem = props => {
  const {gameDetails} = props
  const {thumbnailUrl, title, viewCount, id} = gameDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <NavLink to={`/videos/${id}`}>
            <GameListItem>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />

              <AboutContainer>
                <GameTitle theme={isDarkTheme}>{title}</GameTitle>

                <ViewsText>{`${viewCount} Watching Worldwide`}</ViewsText>
              </AboutContainer>
            </GameListItem>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingItem
