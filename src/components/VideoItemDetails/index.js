import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {
  VideoItemContainer,
  LoaderContainer,
  VideoDetailsContainer,
  PlayerAndVideoDetailsContainer,
  ReactPlayerContainer,
  Description,
  DynamicDataContainer,
  DynamicDataStyling,
  LeftDynamicContainer,
  RightDynamicContainer,
  ProfileContainer,
  Profile,
  ChannelNameViewCountAndPublishedStyling,
  Title,
  IconContainer,
  ViewText,
  DetailsContainer,
  AboutContainer,
  HorizontalLine,
} from './style'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLike: false,
    isDislike: false,
  }

  componentDidMount() {
    this.fetchVideoData()
  }

  fetchVideoData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedVideoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }

      this.setState({
        videoDetails: updatedVideoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderPlayer = () => {
    const {videoDetails} = this.state
    return (
      <ReactPlayerContainer>
        <ReactPlayer
          url={videoDetails.videoUrl}
          controls
          width="100%"
          height="70vh"
        />
      </ReactPlayerContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  onLikeButtonClicked = () => {
    this.setState(prev => ({isLike: !prev.isLike, isDislike: false}))
  }

  onDislikeButtonClicked = () => {
    this.setState(prev => ({isDislike: !prev.isDislike, isLike: false}))
  }

  renderVideoDetailsOnSuccess = () => (
    <ThemeContext.Consumer>
      {value => {
        const {videoDetails, isLike, isDislike} = this.state
        const {
          isDarkTheme,
          addOrRemoveAsOrFromSavedVideos,
          savedVideosList,
        } = value
        console.log(videoDetails)

        const onSaveButtonClicked = () => {
          addOrRemoveAsOrFromSavedVideos(videoDetails)
        }

        const publishedDate = formatDistanceToNow(
          new Date(videoDetails.publishedAt),
        )

        const likeClass = isLike ? '#2563eb' : '#64748b'
        const dislikeClass = isDislike ? '#2563eb' : '#64748b'

        const {match} = this.props
        const {id} = match.params

        const savedListIds = savedVideosList.map(each => each.id)
        const isSaved = savedListIds.includes(id)
        const saveButtonText = isSaved ? 'Saved' : 'Save'
        const saveClass = isSaved ? '#2563eb' : '#64748b'

        return (
          <PlayerAndVideoDetailsContainer>
            {this.renderPlayer()}
            <Title darkMode={isDarkTheme}>{videoDetails.title}</Title>
            <DynamicDataContainer>
              <LeftDynamicContainer>
                <DynamicDataStyling>
                  {`${videoDetails.viewCount} views`}
                </DynamicDataStyling>
                <DynamicDataStyling>{publishedDate}</DynamicDataStyling>
              </LeftDynamicContainer>
              <RightDynamicContainer>
                <IconContainer
                  type="button"
                  color={likeClass}
                  onClick={this.onLikeButtonClicked}
                >
                  <AiOutlineLike />
                  <ViewText color={likeClass}>Like</ViewText>
                </IconContainer>
                <IconContainer
                  type="button"
                  color={dislikeClass}
                  onClick={this.onDislikeButtonClicked}
                >
                  <AiOutlineDislike />
                  <ViewText color={dislikeClass}>Dislike</ViewText>
                </IconContainer>
                <IconContainer
                  type="button"
                  color={saveClass}
                  value={isSaved}
                  onClick={onSaveButtonClicked}
                >
                  <BiListPlus />
                  <ViewText color={saveClass}>{saveButtonText}</ViewText>
                </IconContainer>
              </RightDynamicContainer>
            </DynamicDataContainer>
            <HorizontalLine />
            <DetailsContainer>
              <ProfileContainer>
                <Profile
                  src={videoDetails.profileImageUrl}
                  alt="channel logo"
                />
              </ProfileContainer>
              <AboutContainer>
                <Title darkMode={isDarkTheme}>{videoDetails.channelName}</Title>
                <ChannelNameViewCountAndPublishedStyling>
                  {`${videoDetails.subscriberCount} subscribers`}
                </ChannelNameViewCountAndPublishedStyling>

                <Description darkMode={isDarkTheme}>
                  {videoDetails.description}
                </Description>
              </AboutContainer>
            </DetailsContainer>
          </PlayerAndVideoDetailsContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  retryButtonClicked = () => {
    this.fetchVideoData()
  }

  renderBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetailsOnSuccess()
      case apiStatusConstants.failure:
        return <FailureView retryButtonClicked={this.retryButtonClicked} />
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <VideoItemContainer theme={isDarkTheme}>
              <Header />
              <VideoDetailsContainer data-testid="videoItemDetails">
                <SideBar />

                {this.renderBasedOnApiStatus()}
              </VideoDetailsContainer>
            </VideoItemContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
