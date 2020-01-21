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

export const GREY_COLOR = {
  '100': '#FAFAFA',
  '200': '#E5E5E5',
  '300': '#CCCCCC',
  '400': '#999999',
  '500': '#666666',
  '600': '#333333'
};


////////////////////////////////
//          FONTS
////////////////////////////////

// Montserrat
export const MONTSERRAT_REGULAR_FONT = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 'normal',
  src: `url('/fonts/montserrat/Montserrat-Regular.ttf') format('truetype')`,
};

export const MONTSERRAT_BLACK_FONT = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 900,
  src: `url('/fonts/montserrat/Montserrat-Black.ttf') format('truetype')`,
};

export const MONTSERRAT_LIGHT_FONT = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 200,
  src: `url('/fonts/montserrat/Montserrat-Light.ttf') format('truetype')`,
};

// Crimson-Text
export const CRIMSON_REGULAR_FONT = {
  fontFamily: 'CrimsonText',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 'normal',
  src: `url('/fonts/crimson-text/CrimsonText-Regular.ttf') format('truetype')`,
};

export const CRIMSON_ITALIC_FONT = {
  fontFamily: 'CrimsonText',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 'normal',
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
  fontFamily: ['Montserrat', 'CrimsonText'].join(','),
  h1: {
    fontSize: '5.167rem',
    fontWeight: 'bold'
  },
  h2: {
    fontSize: '4.333rem',
    fontWeight: 'bold'
  },
  h3: {
    fontSize: '3.5rem',
    fontWeight: 'bold'
  },
  subtitle1: {
    fontSize: '1.667rem',
    fontWeight: 200
  },
  subtitle2: {
    fontSize: '1.333rem',
    fontWeight: 400
  },
  body2: {
    fontFamily: 'CrimsonText',
    fontSize: '1.333rem',
    fontWeight: 'normal'
  },
  caption: {
    fontFamily: 'CrimsonText',
    fontSize: '1.333rem',
    fontWeight: 'normal'
  },
  button: {
    fontSize: '0.917rem'
  }
}
