import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {GrClose} from 'react-icons/gr'
import {BiSearchAlt2} from 'react-icons/bi'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'

import {
  HomeContainer,
  HomeContent,
  HomeVideoContent,
  BannerContainer,
  BannerLogo,
  BannerLogoContainer,
  CloseButton,
  BannerDescription,
  GetNowButton,
  VideoPageContainer,
  InputContainer,
  InputBox,
  SearchButton,
  ResultsContainer,
  FailureImage,
  ResultsMsg,
  Suggestion,
  RetryButton,
  VideosContainer,
} from './style'
import ThemeContext from '../../Context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    moviesList: [],
    bannerVisible: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.videos.map(eachData => ({
        channelName: eachData.channel.name,
        profileImageUrl: eachData.channel.profile_image_url,
        id: eachData.id,
        publishedAt: eachData.published_at,
        thumbnailUrl: eachData.thumbnail_url,
        title: eachData.title,
        viewCount: eachData.view_count,
      }))
      this.setState({
        moviesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickRetry = () => {
    this.getVideos()
  }

  closeBannerClicked = () => {
    this.setState({bannerVisible: false})
  }

  onSearchButtonClicked = () => {
    this.getVideos()
  }

  renderNoSearchResults = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ResultsContainer>
            <FailureImage
              alt="no videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <ResultsMsg theme={isDarkTheme}>No Search results found</ResultsMsg>
            <Suggestion theme={isDarkTheme}>
              Try different key words or remove search filter
            </Suggestion>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </ResultsContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {moviesList} = this.state
    return (
      <VideosContainer>
        {moviesList.length === 0
          ? this.renderNoSearchResults()
          : moviesList.map(eachMovie => (
              <VideoItem key={eachMovie.id} movieDetails={eachMovie} />
            ))}
      </VideosContainer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  retryButtonClicked = () => {
    this.getVideos()
  }

  renderVideoApiStatus = () => {
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
    const {searchInput, bannerVisible} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeContainer theme={isDarkTheme} data-testid="home">
              <Header />
              <HomeContent>
                <SideBar />
                <HomeVideoContent>
                  {bannerVisible && (
                    <BannerContainer data-testid="banner">
                      <BannerLogoContainer>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseButton
                          type="button"
                          data-testid="close"
                          onClick={this.closeBannerClicked}
                        >
                          <GrClose />
                        </CloseButton>
                      </BannerLogoContainer>
                      <BannerDescription>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerDescription>
                      <GetNowButton type="button">GET IT NOW</GetNowButton>
                    </BannerContainer>
                  )}
                  <VideoPageContainer theme={isDarkTheme}>
                    <InputContainer theme={isDarkTheme}>
                      <InputBox
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearch}
                        theme={isDarkTheme}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onSearchButtonClicked}
                        theme={isDarkTheme}
                      >
                        <BiSearchAlt2
                          size="20px"
                          color={isDarkTheme ? '' : '#ffffff'}
                        />
                      </SearchButton>
                    </InputContainer>
                    {this.renderVideoApiStatus()}
                  </VideoPageContainer>
                </HomeVideoContent>
              </HomeContent>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
