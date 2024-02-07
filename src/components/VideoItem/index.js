import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'
import {
  VideoListItem,
  VideoThumbnailImg,
  VideoDetailsContainer,
  NavLink,
  ProfileImg,
  AboutContainer,
  VideoTitle,
  ChannelText,
  ViewsAndPublishedContainer,
} from './style'

const VideoItem = props => {
  const {movieDetails} = props
  const {
    channelName,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    id,
    viewCount,
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
              <VideoDetailsContainer>
                <ProfileImg src={profileImageUrl} alt="channel logo" />

                <AboutContainer>
                  <VideoTitle darkMode={isDarkTheme}>{title}</VideoTitle>
                  <ChannelText>{channelName}</ChannelText>
                  <ViewsAndPublishedContainer>
                    <ChannelText>{`${viewCount} views`}</ChannelText>
                    <ChannelText>{`. ${year}`}</ChannelText>
                  </ViewsAndPublishedContainer>
                </AboutContainer>
              </VideoDetailsContainer>
            </VideoListItem>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoItem
