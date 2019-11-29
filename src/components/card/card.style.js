// Styled-components
import styled from 'styled-components';

// Main core
import { getColor, lightenColor } from '@root/src/utils/functions';


export const CardStyled = styled.div`
  ${({ disablePadding }) => !disablePadding && css`padding: 1.5em 0.8em;` };  
  border-radius: 8px;
  background: ${getColor('background_paper')};
  box-shadow: 0px 3px 8px ${lightenColor('black', 0.95)};
`
