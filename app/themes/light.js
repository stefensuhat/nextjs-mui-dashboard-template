import { createTheme } from '@mui/material';
import palette from 'app/themes/palette';
import shadows from 'app/themes/shadows';

const defaultTheme = createTheme({});

const theme = createTheme({
  shape: { borderRadius: 10 },
  mixins: {
    drawerWidth: 220,
  },
  palette,
  shadows,
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Helvetica',
      'Arial',
    ].join(','),
    fontWeightMedium: 600,
    fontWeightBold: 900,
    subtitle2: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${defaultTheme.palette.divider}`,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            color: defaultTheme.palette.secondary,
            border: '2px dashed #00CF99',
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          fontWeight: 600,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;
