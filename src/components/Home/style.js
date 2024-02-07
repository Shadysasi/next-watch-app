import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ebebeb' : '#181818')};
`
export const HomeContent = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
`

export const HomeVideoContent = styled.div`
  width: 100%;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
  }
`
export const BannerContainer = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`
export const BannerLogo = styled.img`
  height: 34px;
  width: 100px;
`
export const BannerLogoContainer = styled.div`
  width: 100%;
  padding-top: 4px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`
export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;

  color: #181818;
`
export const GetNowButton = styled.button`
  height: 40px;
  padding: 8px 10px 10px 10px;
  border: 1px solid #000000;

  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 500;

  color: #181818;
  background-color: transparent;
  transition: all 0.3s ease-in;

  :hover {
    background-color: #000000;
    color: #ffffff;
    transform: translateY(-5px);
  }
`
export const VideoPageContainer = styled.div`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ebebeb' : '#181818')};
`
export const InputContainer = styled.div`
  height: 40px;
  width: 90%;
  max-width: 600px;
  margin: 0 12px 16px 12px;
  padding: 4px 0px 4px 10px;
  border: none;
  border-radius: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#f5f6f7' : '#373837')};

  :hover {
    background-color: ${props =>
      props.theme === true ? '#ffffff' : '#474a47'};
  }
`
export const InputBox = styled.input`
  height: 100%;
  width: 90%;
  padding-left: 8px;
  border: none;
  outline: none;

  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;

  color: ${props => (props.theme === true ? '#1e293b' : '#d7dfe9')};
  background-color: transparent;}
`
export const SearchButton = styled.button`
  height: 100%;
  min-width: 60px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
`
export const FailureImage = styled.img`
  margin-top: 50px;
  width: 25%;
`
export const ResultsMsg = styled.h1`
  color: ${props => (props.theme ? '#0f0f0f' : '#f9f9f9')};
`
export const Suggestion = styled.p`
  color: ${props => (props.theme ? '#0f0f0f' : '#f9f9f9')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  height: 40px;
  width: 10%;
`
export const VideosContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
