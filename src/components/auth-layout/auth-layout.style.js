// Styled-components
import styled from 'styled-components';

// Main core
import Flex from '@components/common/flex';
import Card from '@components/card';
import { getColor, lightenColor } from '@utils/functions';


export const LayoutWrapper = styled(Flex)`
  height: 100vh;
  background-color: ${getColor('background.default')};
  background: url('/images/background/auth-background.jpg') no-repeat;
  background-size: cover;
`

export const ContentWrapper = styled(Card)`
  padding: 0;
  min-width: 400px;
  box-shadow: 0px 3px 10px ${lightenColor('black', 0.5)};
`
