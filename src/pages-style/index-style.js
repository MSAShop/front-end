// Styled-components
import styled from 'styled-components';

// Material-ui lab
import MuiSkelton from '@material-ui/lab/Skeleton';

// Main core
import Card from '@components/card';
import Text from '@components/text';
import spacing from '@utils/styles/spacing';
import { getColor } from '@utils/functions';


export const ProductsTitle = styled(Text)`
  margin: 1em 0em;
`

export const ProductWrapper = styled(Card)`
  text-align: center;
  height: 100%;
`

export const ProductImage = styled.img`
  width: 100%;
  height: 225px;
  border-radius: 8px 8px 0px 0px;
  color: transparent;
`

export const ProductText = styled(Text)`
  margin: 0.4em 1em;
`

export const Skelton = styled(MuiSkelton)`
  ${spacing}
  background-color: ${getColor('grey.200')};
`