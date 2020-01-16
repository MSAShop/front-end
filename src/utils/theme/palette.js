import createPalette from '@material-ui/core/styles/createPalette';

const primaryColor = {
  light: '#4398bb',
  main: '#147FAB',
  dark: '#0e5877',
};

const secondaryColor = {
  light: '#ff7060',
  main: '#db3c35',
  dark: '#a2000d',
};

const errorColor = {
  light: '#ff9893',
  main: '#ff6565',
  dark: '#c6303b'
};

const successColor = {
  light: '#86ffd9',
  main: '#4ce2a7',
  dark: '#00af78'
};

const warningColor = {
  light: '#fff350',
  main: '#ffc107',
  dark: '#c79100'
}

const infoColor = {
  light: '#8cffff',
  main: '#51dde9',
  dark: '#32cdda'
}

const textColor = {
  primary: '#222328',
  secondary: '#3A405B',
  hint: '#a1a6bb',
  disabled: '#b9bed1'
}


const greyColor = {
  '100': '#F0F2F7',
  '200': '#E4E7EF',
  '300': '#B9BED1',
  '400': '#A1A6BB',
  '500': '#3A405B',
  '600': '#222328'
};

const palette = createPalette({
  primary: primaryColor,
  secondary: secondaryColor,
  error: errorColor,
  success: successColor,
  warning: warningColor,
  info: infoColor,
  grey: greyColor,
  text: textColor
});

export const colorsPath = {
  primary: 'primary.main',
  primary_light: 'primary.light',
  primary_dark: 'primary.dark',

  secondary: 'secondary.main',
  secondary_light: 'secondary.light',
  secondary_dark: 'secondary.dark',
  
  error: 'error.main',
  error_light: 'error.light',
  error_dark: 'error.dark',
  
  success: 'success.main',
  success_light: 'success.light',
  success_dark: 'success.dark',
  
  warning: 'warning.main',
  warning_light: 'warning.light',
  warning_dark: 'warning.dark',
  
  info: 'info.main',
  info_light: 'info.light',
  info_dark: 'info.dark',
  
  white: 'common.white',
  black: 'common.black',

  text_primary: 'text.primary',
  text_secondary: 'text.secondary',
  text_hint: 'text.hint',
  text_disabled: 'text.disabled',

  background_paper: 'background.paper'
}


export default palette;

