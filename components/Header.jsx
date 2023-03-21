import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Navbar from './Navbar';

const navItems = ['Home', 'About', 'Contact'];
const Header = () => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          position: 'relative',
          height: '800px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          '&::after': {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '120%',
            top: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            backgroundImage: `linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0.9) 0,
                        rgba(0, 0, 0, 0.1) 60%,
                        rgba(0, 0, 0, 0.8) 100%,

                      )`,
          },
        }}>
        <Image
          src="/img/movie.jpg"
          layout="fill"
          alt="backdrop netflix"
          objectFit="cover"
        />
        <Container
          maxWidth="md"
          sx={{
            position: 'relative',
            zIndex: '1000',
            width: '730px',
            padding: '10px 5px',
          }}>
          <Typography
            variant="h3"
            component="h1"
            color="common.white"
            fontWeight="600"
            textAlign="center">
            Unlimited movies, TV shows, and more.
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="common.white"
            textAlign="center"
            fontWeight="500"
            sx={{ my: 2 }}>
            Watch anywhere. Cancel anytime.
          </Typography>

          <Typography
            variant="h6"
            component="p"
            color="common.white"
            textAlign="center"
            sx={{ my: 3 }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={10} sm={8} md={9} lg={8}>
              <TextField
                label="Email address"
                variant="filled"
                fullWidth
                sx={{
                  bgcolor: 'common.white',
                }}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={4}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{
                  height: '56px',
                  borderRadius: '0',
                  width: '100%',
                  fontSize: '25px',
                  backgroundColor: '#1055E6',
                  color: 'white',
                }}>
                Get started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
