// Montserrat
const montserratRegular = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `url('/fonts/montserrat/Montserrat-Regular.ttf') format('truetype')`,
};

const montserratBlack = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `url('/fonts/montserrat/Montserrat-Black.ttf') format('truetype')`,
};

const montserratLight = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `url('/fonts/montserrat/Montserrat-Light.ttf') format('truetype')`,
};

// Crimson-Text
const crimsonRegular = {
  fontFamily: 'CrimsonText',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `url('/fonts/crimson-text/CrimsonText-Regular.ttf') format('truetype')`,
};

const crimsonItalic = {
  fontFamily: 'CrimsonText',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `url('/fonts/crimson-text/CrimsonText-Italic.ttf') format('truetype')`,
};

const typography = {
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
    fontWeight: 700
  },
  h4: {
    fontSize: '1.777rem',
    fontWeight: 700
  },
  h5: {
    fontSize: '1.2rem',
    fontWeight: 700
  },
  h6: {
    fontSize: '0.98rem',
    fontWeight: 700
  },
  paragraph1: {
    fontSize: '0.78rem',
  },
  paragraph2: {
    fontFamily: 'CrimsonText',
    fontSize: '0.87rem',
  },
  paragraph3: {
    fontFamily: 'CrimsonText',
    fontSize: '0.87rem',
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

// ---------------------------------------

export const fontFace = [
  montserratRegular,
  montserratBlack,
  montserratLight,
  crimsonRegular,
  crimsonItalic
]

export default typography;
