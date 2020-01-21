import Box from '@material-ui/core/Box';
import Link from 'next/link';

import {
	HeaderWrapperStyled,
	BrandNameStyled,
	LogoStyled
} from './header.styled';


const Flex = props => <Box display='flex' alignItems='center' {...props} />;

const Brand = () => (
  <Flex>
    <LogoStyled src='/svg/logo.svg' />
    <Link href='/'>
      <BrandNameStyled>MSA Shop</BrandNameStyled>
    </Link>
  </Flex>
);

const UserActions = () => {

  return (
    <Flex>

    </Flex>
  )
}

const Header = () => {

  return (
    <HeaderWrapperStyled>
      <Brand />
      <UserActions />
    </HeaderWrapperStyled>
  )
}

export default Header;
