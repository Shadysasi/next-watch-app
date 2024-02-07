import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 0px;
  margin-bottom: 25px;
  cursor: pointer;
`
export const VideoThumbnailImg = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const AboutContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  font-size: 16px;
  color: ${props => (props.darkMode ? '#181818' : '#f4f4f4')};
  margin-bottom: 0px;
`
export const ChannelText = styled.p`
  font-size: 16px;
  color: #616e7c;
  margin: 5px 10px 0px 0px;
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 10px;
`
