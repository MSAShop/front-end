// Styled-tools
import { withProp, prop } from 'styled-tools';

// Styled-components
import { css } from 'styled-components';


// Props
export const props = {
  borderRadius: 'borderRadius',
  shape: prop('theme.shape', {})
}

const shape = withProp(
  Object.values(props),
  (borderRadius, shape) => borderRadius && css`border-radius: ${shape[borderRadius] || borderRadius}px;`
);

export default shape;
