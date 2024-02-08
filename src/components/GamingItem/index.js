import ThemeContext from '../../Context/ThemeContext'
import {
  GameCard,
  GameThumbnail,
  GameDetailsContainer,
  GameName,
  ViewCount,
  NavLink,
} from './style'

const GamingItem = props => {
  const {gameDetails} = props
  const {thumbnailUrl, title, viewCount, id} = gameDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <GameCard>
            <NavLink to={`/videos/${id}`}>
              <GameThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
                loading="lazy"
              />
              <GameDetailsContainer>
                <GameName theme={isDarkTheme}>{title}</GameName>
                <ViewCount
                  theme={isDarkTheme}
                >{`${viewCount} Watching Worldwide`}</ViewCount>
              </GameDetailsContainer>
            </NavLink>
          </GameCard>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingItem
