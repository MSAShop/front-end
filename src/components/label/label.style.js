// Styled-components
import styled from 'styled-components';

// Material-ui core
import InputLabel from '@material-ui/core/InputLabel';
import { getColor } from '@utils/functions';
import spacing from '@utils/styles/spacing';


export const CustomLabel = styled(InputLabel)`
  ${spacing};
  text-transform: uppercase;
  color: ${getColor('grey.400')};
  font-size: 0.75rem;
  letter-spacing: 1px;
  font-weight: bold;
`
