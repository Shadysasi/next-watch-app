import styled from 'styled-components'

export const SavedVideoPageContainer = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ebebeb' : '#0f0f0f')};
`
export const SavedVideosContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100%;

  display: flex;
  justify-content: stretch;
  align-items: flex-start;
`

export const SavedVideosContentContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
  @media screen and (min-width: 567px) {
    align-items: center;
  }
`

export const VideosContainer = styled.ul`
  width: 100%;
  padding-left: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  @media screen and (min-width: 567px) {
    width: 90%;
  }
`
export const NoSavedVideosContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const NoSavedVideos = styled.img`
  width: 70%;
  max-width: 360px;
  margin-bottom: 20px;
`
export const NoSavesVideosText = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`

export const NoSavedVideosSuggestion = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`

export const SavedVideoHeaderContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 567px) {
    align-items: center;
  }
`
export const HeadContainer = styled.div`
  padding: 16px;
  height: 80px;
  width: 100%;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#f1f1f1' : '#231f20')};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const IconContainer = styled.div`
  height: 60px;
  width: 60px;
  border: none;
  border-radius: 30px;
  margin-right: 14px;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#d7dfe9' : '#000000')};

  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 500;
  line-height: 1.4;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
