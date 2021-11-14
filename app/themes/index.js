import { CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import lightTheme from 'app/themes/light';

const propTypes = { children: PropTypes.node.isRequired };
const defaultProps = {};

function ThemeConfig({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeConfig.propTypes = propTypes;
ThemeConfig.defaultProps = defaultProps;

export default ThemeConfig;
