// Material-ui core
import { createMuiTheme } from '@material-ui/core';

// Main core
import palette from './palette';
import typography from './typography';
import overrides from './override-material-styles';
import shape from './shape';

// ---------------------------------------------

const theme = createMuiTheme({ palette, shape, overrides, typography });

export default theme;
