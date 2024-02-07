import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GameListItem = styled.li`
  list-style-type: none;
  width: 30%;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 16px;

  @media screen and (max-width: 330px) {
    width: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 900px;) {
    width: 30%;
  }

  @media screen and (min-width: 901px) and (max-width: 1000px) {
    width: 23%;
  }

  @media screen and (min-width: 1000px) {
    width: 18%;
  }
`
export const ThumbnailImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
`

export const AboutContainer = styled.div`
  width: 100%;
  padding: 4px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const GameTitle = styled.p`
  margin: 2px;

  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`
export const ViewsText = styled.p`
  margin: 2px;

  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`
export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
`
