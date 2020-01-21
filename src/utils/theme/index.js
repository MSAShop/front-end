// Material-ui core
import { createMuiTheme } from '@material-ui/core';

// Main core
import palette from './palette';
import typography from './typography';
import overrides from './override-material-styles';

// ---------------------------------------------

const shape = { borderRadius: 98,  default: 8, square: 0, rounded: 98 };

const theme = createMuiTheme({ palette, shape, overrides, typography });

export default theme;
