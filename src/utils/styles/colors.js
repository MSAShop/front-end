// Styled-tools
import { withProp, prop } from 'styled-tools';

// Styled-components
import { css } from 'styled-components';

// Main core
import { getColor } from '@utils/functions';


// Props
export const props = {
  color: 'color',
  bg: 'bg',
  palette: prop('theme.palette', {})
}

const colors = withProp(
  Object.values(props),
  (color, bg, palette) => {
    const fgColor = getColor(color, palette);
    const bgColor = getColor(bg, palette);

    return css`
      color: ${fgColor};
      background-color: ${bgColor};
    `
  }
);

export default colors;
