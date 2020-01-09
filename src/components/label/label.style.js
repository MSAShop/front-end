// Styled-components
import styled from 'styled-components';

// Styled-tools
import { ifProp } from 'styled-tools';

// Main core
import { getColor } from '@utils/functions';
import Text from '@components/text';

const labelAttrs = () => ({ variant: 'label'});
export const CustomLabel = styled(Text).attrs(labelAttrs)`
  text-transform: uppercase;
  letter-spacing: 1.2px; 
  color: ${getColor('grey.300')};
  margin: ${ifProp('margin', '0.2em 1em', '0.2em 0')};
`
