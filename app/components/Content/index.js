import { styled, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = { children: PropTypes.node.isRequired };
const defaultProps = {};

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({
    theme, open,
  }) => ({
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${theme.mixins.drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const Content = ({ children }) => (
  <Main open>
    <Toolbar />

    {children}
  </Main>
);

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
