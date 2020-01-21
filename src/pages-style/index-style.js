// Styled-components
import styled from 'styled-components';

// Main core
import { getColor } from '@utils/functions';
import Card from '@components/card';
import Text from '@components/text';


export const ProductsTitle = styled(Text)`
  margin: 1em 0em;
`

export const ProductWrapper = styled(Card)`
  height: 100%;
`

export const ProductImage = styled.img`
  width: 100%;
  height: 225px;
  border-radius: 8px 8px 0px 0px;
`

export const ProductText = styled(Text)`
  margin: 0.4em 1em;
`
