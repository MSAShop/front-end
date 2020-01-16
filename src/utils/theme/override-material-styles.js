import { fontFace } from './typography';


const overrides = {
  MuiCssBaseline: {
    '@global': {
      '@font-face': fontFace,
    }
  } 
};

export default overrides;
