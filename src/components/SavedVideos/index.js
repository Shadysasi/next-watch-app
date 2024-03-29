import {HiFire, HiOutlineFire} from 'react-icons/hi'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  SavedVideoPageContainer,
  SavedVideosContainer,
  SavedVideosContentContainer,
  VideosContainer,
  NoSavedVideosContainer,
  NoSavedVideos,
  NoSavesVideosText,
  NoSavedVideosSuggestion,
  HeadContainer,
  IconContainer,
  Heading,
} from './style'

import TrendingItem from '../TrendingItem'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value
      console.log(savedVideosList)
      const renderSavedVideos = () => (
        <>
          <HeadContainer theme={isDarkTheme}>
            <IconContainer theme={isDarkTheme}>
              {isDarkTheme ? (
                <HiFire size="25px" color="red" />
              ) : (
                <HiOutlineFire size="25px" color="red" />
              )}
            </IconContainer>
            <Heading theme={isDarkTheme}>Saved Videos</Heading>
          </HeadContainer>
          <VideosContainer>
            {savedVideosList.map(eachItem => (
              <TrendingItem key={eachItem.id} movieDetails={eachItem} />
            ))}
          </VideosContainer>
        </>
      )

      return (
        <SavedVideoPageContainer theme={isDarkTheme}>
          <Header />
          <SavedVideosContainer data-testid="savedVideos">
            <SideBar />
            <SavedVideosContentContainer>
              {savedVideosList.length === 0 ? (
                <NoSavedVideosContainer>
                  <NoSavedVideos
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <NoSavesVideosText theme={isDarkTheme}>
                    No saved videos found
                  </NoSavesVideosText>
                  <NoSavedVideosSuggestion theme={isDarkTheme}>
                    Save your videos by clicking a button
                  </NoSavedVideosSuggestion>
                </NoSavedVideosContainer>
              ) : (
                renderSavedVideos()
              )}
            </SavedVideosContentContainer>
          </SavedVideosContainer>
        </SavedVideoPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
