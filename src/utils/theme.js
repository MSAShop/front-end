import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";
import {
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	ERROR_COLOR,
	GREY_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR
} from './constants';


const palette = createPalette({
  primary: PRIMARY_COLOR,
  secondary: SECONDARY_COLOR,
  error: ERROR_COLOR,
  success: SUCCESS_COLOR,
  warning: WARNING_COLOR,
  grey: GREY_COLOR
});

const shape = { borderRadius: 98 };

const theme = createMuiTheme({ palette, shape });
export default responsiveFontSizes(theme);