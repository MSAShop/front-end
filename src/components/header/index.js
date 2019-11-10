// Next.js
import Link from 'next/link';

// Material-ui core
import Container from '@material-ui/core/Container';

// Main core
import Flex from '@components/common/flex';

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
    <Link href='/'>
      <BrandNameStyled>MSA Shop</BrandNameStyled>
    </Link>
  </Flex>
);

const NavbarLink = ({ href = '#', as, ...props }) => {

  return (
    <Link href={href} as={as}>
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
      <ButtonStyled variant='text'>Sign in</ButtonStyled>
      <ButtonStyled variant='outlined'>Sign up</ButtonStyled>
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
