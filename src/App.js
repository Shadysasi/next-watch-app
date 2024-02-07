import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './Context/ThemeContext'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

class App extends Component {
  state = {isDarkTheme: false, savedVideosList: []}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  /*
  toggleTabId = id => {
    this.setState({activeTabId: id})
  }
  */

  addOrRemoveAsOrFromSavedVideos = videoDetails => {
    const {savedVideosList} = this.state
    let savedListIds = []
    if (savedVideosList.length !== 0) {
      savedListIds = savedVideosList.map(each => each.id)
    }
    if (savedListIds.includes(videoDetails.id)) {
      this.setState({
        savedVideosList: savedVideosList.filter(
          each => each.id !== videoDetails.id,
        ),
      })
    } else {
      this.setState({savedVideosList: [...savedVideosList, videoDetails]})
    }
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state
    console.log(savedVideosList)
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          addOrRemoveAsOrFromSavedVideos: this.addOrRemoveAsOrFromSavedVideos,
          savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
