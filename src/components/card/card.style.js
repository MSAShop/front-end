import styled from 'styled-components';
import { getColor } from '@root/src/utils/functions';
import { lighten } from '@material-ui/core/styles';

export const CardStyled = styled.div`
  padding: 1.5em 0.8em;
  border-radius: 8px;
  background: ${getColor('background_paper')};
  box-shadow: 0px 3px 8px ${lighten('#000', 0.95)};
`