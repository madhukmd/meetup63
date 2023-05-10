import {Link} from 'react-router-dom'
import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

import {
  HomeContainer,
  HomeHeading,
  HomeText,
  Register,
  HomeImage,
  HomeHeadingRegister,
  HomeTextRegister,
} from './styledComponents'

const HomeReg = 'https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png'

const Home = () => {
  const register = () => (
    <HomeContainer>
      <HomeHeading>Welcome to Meetup</HomeHeading>
      <HomeText>Please register for the topic</HomeText>
      <Link to="/register">
        <Register type="button">Register</Register>
      </Link>
      <HomeImage src={HomeReg} alt="meetup" />
    </HomeContainer>
  )

  const toRegister = (name, topic) => (
    <HomeContainer>
      <HomeHeadingRegister>Hello {name}</HomeHeadingRegister>
      <HomeTextRegister>Welcome to {topic}</HomeTextRegister>
      <HomeImage src={HomeReg} alt="meetup" />
    </HomeContainer>
  )

  return (
    <MeetupContext.Consumer>
      {value => {
        const {isRegister, name, topic} = value
        return (
          <>
            <Header />
            {isRegister ? toRegister(name, topic) : register()}
          </>
        )
      }}
    </MeetupContext.Consumer>
  )
}
export default Home
