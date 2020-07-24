import Quicksand from '../assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf';
import { createMuiTheme } from '@material-ui/core'

const quicksand = {
  fontFamily: 'quicksand',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('quicksand'),
    local('quicksand-Regular'),
    url(${Quicksand}) format('.ttf')
  `,
  // unicodeRange:
  //   'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'quicksand, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [quicksand],
      },
    },
  },
  MuiMenu: {
    list: {
        backgroundColor: "white",
    },
},
  palette: {
    primary: {
      main: "#3d3e43",
    },
    navItem: "#d2d2d2",
    secondary: {
      main: '#89744a',
    },
    textColor: {
      main: "#ffffff"
    },
    socialIconColor:{
      main: "#f0cfca"
    },
    paginationColor: {
      main: "#F2F2F2"
    }
  },
});     

