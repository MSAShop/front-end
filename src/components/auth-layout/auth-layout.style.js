// Styled-components
import styled from 'styled-components';

// Main core
import Flex from '@components/common/flex';
import Card from '@components/card';
import { getColor } from '@utils/functions';


export const LayoutWrapper = styled(Flex)`
  height: 100vh;
  background-color: ${getColor('background.default')};
`

export const ContentWrapper = styled(Card)`
  padding: 0;
  min-width: 400px;
`
