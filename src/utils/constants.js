////////////////////////////////
//          COLORS
////////////////////////////////

export const PRIMARY_COLOR = {
  light: '#4398bb',
  main: '#147FAB',
  dark: '#0e5877',
};

export const SECONDARY_COLOR = {
  light: '#ff7060',
  main: '#db3c35',
  dark: '#a2000d',
};

export const ERROR_COLOR = {
  light: '#ff9893',
  main: '#ff6565',
  dark: '#c6303b'
};

export const SUCCESS_COLOR = {
  light: '#86ffd9',
  main: '#4ce2a7',
  dark: '#00af78'
};

export const WARNING_COLOR = {
  light: '#fff350',
  main: '#ffc107',
  dark: '#c79100'
}

export const INFO_COLOR = {
  light: '#8cffff',
  main: '#51dde9',
  dark: '#32cdda'
}

export const TEXT_COLOR = {
  primary: '#222328',
  secondary: '#3ad05b',
  hint: '#a1a6bb',
  disabled: '#b9bed1'
}


export const GREY_COLOR = {
  '100': '#FAFAFA',
  '200': '#E5E5E5',
  '300': '#CCCCCC',
  '400': '#999999',
  '500': '#666666',
  '600': '#333333'
};

export const COLORS_PATH = {
  primary: ['primary', 'main'],
  primary_light: ['primary', 'light'],
  primary_dark: ['primary', 'dark'],

  secondary: ['secondary', 'main'],
  secondary_light: ['secondary', 'light'],
  secondary_dark: ['secondary', 'dark'],
  
  error: ['error', 'main'],
  error_light: ['error', 'light'],
  error_dark: ['error', 'dark'],
  
  success: ['success', 'main'],
  success_light: ['success', 'light'],
  success_dark: ['success', 'dark'],
  
  warning: ['warning', 'main'],
  warning_light: ['warning', 'light'],
  warning_dark: ['warning', 'dark'],
  
  info: ['info', 'main'],
  info_light: ['info', 'light'],
  info_dark: ['info', 'dark'],
  
  white: ['common', 'white'],
  black: ['common', 'black'],

  text_primary: ['text', 'primary'],
  text_secondary: ['text', 'secondary'],
  text_hint: ['text', 'hint'],
  text_disabled: ['text', 'disabled'],

  background_paper: ['background', 'paper']
}



////////////////////////////////
//          FONTS
////////////////////////////////

// Montserrat
export const MONTSERRAT_REGULAR_FONT = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `url('/fonts/montserrat/Montserrat-Regular.ttf') format('truetype')`,
};

export const MONTSERRAT_BLACK_FONT = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `url('/fonts/montserrat/Montserrat-Black.ttf') format('truetype')`,
};

export const MONTSERRAT_LIGHT_FONT = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `url('/fonts/montserrat/Montserrat-Light.ttf') format('truetype')`,
};

// Crimson-Text
export const CRIMSON_REGULAR_FONT = {
  fontFamily: 'CrimsonText',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `url('/fonts/crimson-text/CrimsonText-Regular.ttf') format('truetype')`,
};

export const CRIMSON_ITALIC_FONT = {
  fontFamily: 'CrimsonText',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `url('/fonts/crimson-text/CrimsonText-Italic.ttf') format('truetype')`,
};


////////////////////////////////
//        TYPOGRAPHY
////////////////////////////////

export const GLOBAL = {
  '@font-face': [
    MONTSERRAT_BLACK_FONT,
    MONTSERRAT_REGULAR_FONT,
    MONTSERRAT_LIGHT_FONT,
    CRIMSON_REGULAR_FONT,
    CRIMSON_ITALIC_FONT
  ]
};

export const TYPOGRAPHY = {
  fontFamily: "'Montserrat', 'CrimsonText', 'Sans Serif'",
  h1: {
    fontSize: '4.209rem',
    fontWeight: 700
  },
  h2: {
    fontSize: '3.157rem',
    fontWeight: 700
  },
  h3: {
    fontSize: '2.369rem',
    fontWeight: 900
  },
  h4: {
    fontSize: '1.777rem',
    fontWeight: 900
  },
  paragraph1: {
    fontSize: '1rem',
  },
  paragraph2: {
    fontFamily: 'CrimsonText',
    fontSize: '1.08rem',
  },
  paragraph3: {
    fontFamily: 'CrimsonText',
    fontSize: '1.2rem',
    fontStyle: 'italic'
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: 700
  },
  button: {
    fontSize: '0.87rem'
  }
}
