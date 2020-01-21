// Styled-tools
import { withProp, prop } from 'styled-tools';

// Styled-components
import { css } from 'styled-components';


// Props
const props = {
  variant: prop('variant', 'paragraph1'),
  typography: prop('theme.typography', {}),
  align: 'align',
  display: 'display',
  noWrap: prop('noWrap', false),
}

const typography = withProp(
  Object.values(props),
  (variant, typography, align, display, noWrap) => {
    const variantInfo = typography[variant];

    return css`
      font-size: ${variantInfo.fontSize};
      font-family: ${variantInfo.fontFamily};
      font-weight: ${variantInfo.fontWeight};
      line-height: ${variantInfo.lineHeight};
      letter-spacing: ${variantInfo.letterSpacing};
      font-style: ${variantInfo.fontStyle};
      text-align: ${align};
      display: ${display};
      ${noWrap && css`white-space: inherit;`}
    `
  }
);

export default typography;
