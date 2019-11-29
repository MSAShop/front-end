// Styled-components
import styled from 'styled-components';

// Main core
import { getColorInStyle } from '@utils/functions';
import Card from '@components/card';


export const ProductsTitleStyled = styled.h1`
  margin: 1em 0em;
`

export const ProductWrapperStyled = styled(Card)`
  height: 100%;
`

export const ProductImageStyled = styled.img`
  width: 100%;
  height: 225px;
  border-radius: 8px 8px 0px 0px;
`

export const ProductNameStyled = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.8em 1em;
  text-align: center;
`
export const ProductPriceStyled = styled.div`
  font-weight: bold;
  margin: 0em 1em 1.5em;
  color: ${getColorInStyle({ name: 'grey.500' })};
`
