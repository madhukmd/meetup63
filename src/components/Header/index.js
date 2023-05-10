import {HeaderContainer, Image} from './styledComponents'

const website =
  'https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png'

const Header = () => (
  <HeaderContainer>
    <Image src={website} alt="website logo" />
  </HeaderContainer>
)
export default Header
