// Material-ui core
import Container from '@material-ui/core/Container';

// Main core
import Flex from '@components/common/flex';
import { Link } from '@services/routes';

// Styles
import {
	HeaderWrapperStyled,
	BrandNameStyled,
	LogoStyled,
  ButtonStyled,
  NavbarLinkStyled
} from './header.styled';


const Brand = () => (
  <Flex>
    <LogoStyled src='/svg/logo.svg' />
    <Link route='home'>
      <BrandNameStyled>MSA Shop</BrandNameStyled>
    </Link>
  </Flex>
);

const NavbarLink = ({ route = '#', params, ...props }) => {

  return (
    <Link route={route} params={params}>
      <NavbarLinkStyled {...props}/>
    </Link>
  )
}

const Navbar = () => {

  return (
    <Flex component='nav'>
      <NavbarLink>Home</NavbarLink>
      <NavbarLink>Dashboard</NavbarLink>
    </Flex>
  )
}

const UserActions = () => {

  return (
    <Flex>
      <Link  route='auth' params={{ page: 'login'}}>
        <ButtonStyled variant='text'>Sign in</ButtonStyled>
      </Link>
      <Link route='auth' params={{ page: 'register' }}>
        <ButtonStyled variant='outlined'>Sign up</ButtonStyled>
      </Link>
    </Flex>
  )
}

const Header = () => {

  return (
    <HeaderWrapperStyled>
      <Container>
        <Flex justifyContent='space-between'>
          <Brand />
          <Navbar />
          <UserActions />
        </Flex>
      </Container>
    </HeaderWrapperStyled>
  )
}

export default Header;
