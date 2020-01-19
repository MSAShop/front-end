// Styled-components
import styled, { css } from 'styled-components';

// Material-UI core
import OutlinedInput from '@material-ui/core/InputBase';

// Styled-tools
import { ifProp } from 'styled-tools';

// Main core
import shapes, { props as shapesProps } from '@utils/styles/shape';
import { getColor, filterProps } from '@utils/functions';


const inputAttrs = p => ({ classes: { focused: 'focused', adornedStart: 'icon' } });
const FilteredInput = filterProps(OutlinedInput, [...Object.keys(shapesProps), 'success']);

export const CustomInput = styled(FilteredInput).attrs(inputAttrs)`
  ${shapes}
  background-color: ${getColor('grey.100')};
  border: 1px solid ${getColor('grey.200')};
  transition: box-shadow 0.3s ease-in;
  padding: 0.3em 1.2em;
  
  input {
    letter-spacing: 0.08em;
  }
  
  &.focused {
    ${ifProp(p => p.success || p.error, null, css`border-width: 0;`)}
    background-color: ${getColor('white')};
    box-shadow: 0px 4px 15px -6px ${getColor('grey.400')};
  }

  &.icon {
    svg {
      margin: 0 0.3em 0 0;
      font-size: 1.2rem;
      color: ${getColor('grey.400')};
    }
  }

  ${ifProp('error', css`border: 1px solid ${getColor('error')};`, null)}
  ${ifProp('success', css`border: 1px solid ${getColor('success')};`, null)}
`
