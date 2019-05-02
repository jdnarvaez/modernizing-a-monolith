// Import theme
import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme(
  {
    primary: '#fcfcfc',
    secondary: '#194756',
    tertiary: '#E3D7C1',
    quaternary: '#E3D7C1',
  },
  {
    primary: {
      name: 'Poppins',
      googleFont: true,
      styles: ['100', '300', '400', '700', '700i', '900']
    },
    secondary: {
      name: 'Rubik',
      googleFont: true,
      styles: ['100', '300', '400', '700', '700i', '900']
    }
  }
);

delete theme.screen.global.body.background;
export default theme;
