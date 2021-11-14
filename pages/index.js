import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import Content from 'app/components/Content';
import Header from 'app/components/Header';
import React, { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <Header />
      <Content>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>S</Avatar>
          <Box>
            <Typography variant="h6">
              Good Afternoon, Stefen Suhat!
            </Typography>
            <Typography variant="subtitle1">
              It&apos;s Saturday, 13 Nov 2021
            </Typography>
          </Box>
        </Box>

        <Box my={2} />
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Card elevation={4} sx={{ height: '100%', p: 2 }}>
              <CardHeader title="Your last session: Onboarding Management" />

              <CardActions>
                <Button>Continue from last session</Button>

              </CardActions>
            </Card>
          </Grid>

          <Grid item md={4}>
            <Card elevation={4} sx={{ height: '100%', p: 2 }}>
              <CardHeader title="Tips of the Day" />
              <CardContent>
                <Typography>Did you know that Ozone is created equal and easy?</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Content>
    </Fragment>
  );
}

export default Home;
