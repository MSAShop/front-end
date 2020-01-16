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
