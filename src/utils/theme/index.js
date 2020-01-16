// Material-ui core
import { createMuiTheme } from '@material-ui/core';

// Main core
import { TYPOGRAPHY, GLOBAL } from '@utils/constants';
import palette from './palette';

// ---------------------------------------------

const shape = { borderRadius: 98,  default: 8, square: 0, rounded: 98 };
const overrides = {
  MuiCssBaseline: { '@global': GLOBAL } 
};

const typography = TYPOGRAPHY;

const theme = createMuiTheme({ palette, shape, overrides, typography });

export default theme;
