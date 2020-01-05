// Styled-components
import styled from 'styled-components';

// Material-ui core
import InputLabel from '@material-ui/core/InputLabel';
import { getColor } from '@utils/functions';

// Main core
import typography from '@utils/styles/typography';
import colors from '@utils/styles/colors';

export const CustomLabel = styled(InputLabel)`
  margin: 0.3em 0;
  color: ${getColor('grey.400')};
  ${typography}
  ${colors};
`
