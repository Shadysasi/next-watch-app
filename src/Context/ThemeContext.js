import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideosList: [],
  addOrRemoveAsOrFromSavedVideos: () => {},
})

export default ThemeContext
