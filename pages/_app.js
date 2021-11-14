import { Box } from '@mui/material';
import React from 'react';
import Sidebar from 'app/components/Sidebar';
import ThemeConfig from 'app/themes';

// eslint-disable-next-line react/prop-types
function OzoneApp({ Component, pageProps }) {
  return (
    <ThemeConfig>
      <Box display="flex" minHeight="100vh">
        <Sidebar />
        <Component {...pageProps} />
      </Box>
    </ThemeConfig>
  );
}

export default OzoneApp;
