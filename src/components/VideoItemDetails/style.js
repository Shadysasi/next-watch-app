import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ebebeb' : '#0f0f0f')};
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  min-height: 80vh;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const PlayerAndVideoDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  overflow-y: auto;
  padding: 14px;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    padding: 20px;
  }
`
export const ReactPlayerContainer = styled.div`
  width: 100%;
`
export const DetailsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  margin-bottom: 50px;
`
export const AboutContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 18px;
  font-weight:500;
  color: ${props => (props.darkMode ? '#1e293b' : '#f8fafc')};
  margin-top: 30px;
  margin-bottom; 0px;
`
export const DynamicDataStyling = styled.p`
  font-size: 16px;
  color: #64748b;
  margin-right: 15px;
  margin-top: 0px;
`

export const DynamicDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LeftDynamicContainer = styled.div`
  width: 40%;
  display: flex;
`

export const RightDynamicContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`
/*
export const LikeOrDislikeOrSaveContainer = styled.div`
  display: flex;
  margin-right: 10px;
`
*/
export const IconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${props => props.color};
`
export const ViewText = styled.p`
 font-family:"Roboto"
  margin-left: 10px;
  color: ${props => props.color};
`

export const Description = styled.p`
  font-size: 16px;
  color: ${props => (props.darkMode ? '#1e293b' : '#f8fafc')};
  min-height: 70px;
  margin-bottom: 0px;
`

export const ChannelNameViewCountAndPublishedStyling = styled.p`
  font-size: 14px;
  color: #616e7c;
  margin-top: 0px;
  margin-right: 15px;
`
export const ProfileContainer = styled.div`
  display: flex;
  margin-right: 20px;
`
export const Profile = styled.img`
    height: 50px;
    width: 50px:
    border-radius: 50px;
`

export const HorizontalLine = styled.hr`
  color: red;
  background-color: green;
`
