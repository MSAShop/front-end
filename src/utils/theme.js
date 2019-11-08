import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";


const palette = createPalette({
  primary: {
    light: '#4398bb',
    main: '#147FAB',
    dark: '#0e5877',
  },
  secondary: {
    light: '#ff7060',
    main: '#db3c35',
    dark: '#a2000d',
  },
  error: {
    light: '#ff9893',
    main: '#ff6565',
    dark: '#c6303b'
  },
  grey: {
    '100': '#FAFAFA',
    '200': '#E5E5E5',
    '300': '#CCCCCC',
    '400': '#999999',
    '500': '#666666',
    '600': '#333333'
  }
});

export default responsiveFontSizes(createMuiTheme({
  palette,
  shape: {
    borderRadius: 98
  }
}));