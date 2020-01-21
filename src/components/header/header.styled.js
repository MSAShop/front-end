import styled from 'styled-components';
import Card from '@components/card';
import { lighten } from '@material-ui/core/styles';

export const HeaderWrapperStyled = styled(Card)`
  position: sticky;
  margin: 0.8em 0em 2em;
  top: 0.8em;
  z-index: 1000;
  box-shadow: 0px 4px 20px 5px ${lighten('#000', 0.94)};
`

export const BrandNameStyled = styled.a`
  font-size: 1.5rem;
  margin: 0em 0.3em;
  line-height: 1;
  cursor: pointer;
  font-family: 'Playball', cursive;
`

const logoSize = 25;
export const LogoStyled = styled.img`
  width: ${logoSize}px;
  height: ${logoSize}px;
`