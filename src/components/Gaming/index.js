import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import GamingItem from '../GamingItem'
import ThemeContext from '../../Context/ThemeContext'

import {
  GamingContainer,
  GamingContentContainer,
  HeadContainer,
  IconContainer,
  Heading,
  GameDetailsContainer,
  GamesContainer,
} from './style'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryButtonClicked = () => {
    this.getGamingVideos()
  }

  renderSuccessView = () => {
    const {gamingList} = this.state

    return (
      <ThemeContext>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamesContainer>
              <HeadContainer theme={isDarkTheme}>
                <IconContainer theme={isDarkTheme}>
                  <SiYoutubegaming size="25px" color="red" />
                </IconContainer>
                <Heading theme={isDarkTheme}>Gaming</Heading>
              </HeadContainer>
              <GameDetailsContainer>
                {gamingList.map(eachItem => (
                  <GamingItem key={eachItem.id} gameDetails={eachItem} />
                ))}
              </GameDetailsContainer>
            </GamesContainer>
          )
        }}
      </ThemeContext>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderGamingStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return <FailureView retryButtonClicked={this.retryButtonClicked} />
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingContainer data-testid="gaming" theme={isDarkTheme}>
              <Header />
              <GamingContentContainer theme={isDarkTheme}>
                <SideBar />
                {this.renderGamingStatus()}
              </GamingContentContainer>
            </GamingContainer>
          )
        }}
      </ThemeContext>
    )
  }
}

export default Gaming
