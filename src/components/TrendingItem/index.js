import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'
import {
  VideoListItem,
  VideoThumbnailImg,
  NavLink,
  AboutContainer,
  VideoTitle,
  ChannelText,
  ViewsAndPublishedContainer,
} from './style'

const TrendingItem = props => {
  const {movieDetails} = props
  const {
    channelName,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    id,
  } = movieDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const year = formatDistanceToNow(new Date(publishedAt))
        return (
          <NavLink to={`/videos/${id}`}>
            <VideoListItem>
              <VideoThumbnailImg src={thumbnailUrl} alt="video thumbnail" />

              <AboutContainer>
                <VideoTitle darkMode={isDarkTheme}>{title}</VideoTitle>
                <ChannelText>{channelName}</ChannelText>
                <ViewsAndPublishedContainer>
                  <ChannelText>{`${viewCount} views`}</ChannelText>
                  <ChannelText>{`. ${year}`}</ChannelText>
                </ViewsAndPublishedContainer>
              </AboutContainer>
            </VideoListItem>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TrendingItem
