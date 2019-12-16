// Styled-components
import styled from 'styled-components';

// Material-ui core
import Button from '@material-ui/core/Button';
import Text from '@material-ui/core/Typography';

// Main core
import Card from '@components/card';
import { getColorInStyle } from '@utils/functions';

///////////////////////////////////////

export const HeaderWrapperStyled = styled(Card)`
  position: sticky;
  z-index: 1000;
  min-width: 600px;
  box-shadow: none;
  padding: 0.8em 0;
  border-radius: 0;
`

///////////////////////////////////////

export const BrandNameStyled = styled.a`
  font-size: 1.5rem;
  margin: 0em 0.3em;
  line-height: 1;
  cursor: pointer;
  font-family: 'Playball', cursive;
`

///////////////////////////////////////

const logoSize = 25;
export const LogoStyled = styled.img`
  width: ${logoSize}px;
  height: ${logoSize}px;
`

///////////////////////////////////////

const buttonAttrs = () => ({ size: 'small', disableFocusRipple: true });
export const ButtonStyled = styled(Button).attrs(buttonAttrs)`
  margin-left: 0.8em;
  min-width: 90px;
`

///////////////////////////////////////
const navLinkAttrs = () => ({ component: 'a' });
export const NavbarLinkStyled = styled(Text).attrs(navLinkAttrs)`
  margin: 0em 0.8em;
  cursor: pointer;

  :hover {
    color: ${getColorInStyle({ name: 'primary.light' })};
  }
`
