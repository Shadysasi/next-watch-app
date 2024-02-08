import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoListItem = styled.li`
  list-style-type: none;

  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 567px) {
    margin-bottom: 40px;
    flex-direction: row;
  }
`
export const VideoThumbnailImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  @media screen and (min-width: 567px) {
    width: 47%;
    margin-right: 16px;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  flex-grow: 1;
`
export const VideoTitle = styled.p`
  margin-top: 2px;
  margin-bottom: 2px;

  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  @media screen and (min-width: 567px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`
export const ChannelText = styled.p`
  font-size: 16px;
  color: #64748b;
  margin: 5px 10px 0px 0px;
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`
