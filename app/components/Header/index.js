import {
  AppBar, Box, Toolbar, Typography, useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const propTypes = { children: PropTypes.node };
// eslint-disable-next-line react/jsx-no-useless-fragment
const defaultProps = { children: <Fragment /> };

const Header = ({ children }) => {
  const theme = useTheme();
  const { drawerWidth } = theme.mixins;

  return (
    <AppBar
      variant="outlined"
      elevation={0}
      color="transparent"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        border: 0,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        transition: (theme) => theme.transitions.create('background', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      <Toolbar>

        <Typography variant="h6">Home</Typography>

        <Box flexGrow={1} />

        {children}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
