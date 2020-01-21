import { createMuiTheme } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";
import {
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	ERROR_COLOR,
	GREY_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
  TYPOGRAPHY,
  GLOBAL
} from '@utils/constants';


const palette = createPalette({
  primary: PRIMARY_COLOR,
  secondary: SECONDARY_COLOR,
  error: ERROR_COLOR,
  success: SUCCESS_COLOR,
  warning: WARNING_COLOR,
  grey: GREY_COLOR
});

const shape = { borderRadius: 98 };
const overrides = {
  MuiCssBaseline: { '@global': GLOBAL,  } 
};

const typography = TYPOGRAPHY;

const theme = createMuiTheme({ palette, shape, overrides, typography });

export default theme;
