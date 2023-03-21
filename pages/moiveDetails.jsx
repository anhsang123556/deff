import Header from '../components/Header';
import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/ToolBar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { grey } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { GifBoxSharp } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovieIcon from '@mui/icons-material/Movie';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';

const moiveDetails = () => {
  return (
    <Box sx={{ marginTop: '79px', position: 'relative' }}>
      <Box
        sx={{
          position: 'relative',
          height: '340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '1000',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '100%',
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
          src="/img/movie_details_5.jpg"
          layout="fill"
          alt="backdrop netflix"
          objectFit="cover"
        />
      </Box>
      <Box
        sx={{
          height: '150px',
          width: '100%',
          backgroundColor: '#032055',
        }}>
        {''}
      </Box>
      <Box
        sx={{
          height: '370px',
          backgroundColor: 'transparent',
          margin: 'auto 130px',
          position: 'absolute',
          zIndex: '2000',
          width: '80%',
          color: 'white',
          top: 150,
          left: 0,
        }}>
        <Grid container>
          <Grid item xs={3}>
            <Box
              sx={{
                height: '370px',
                width: '240px',
                boxShadow: 'gray 0px 0px .5px,#8793AC 0px 0px 0px .5px',
                //   borderRadius: '5px',
              }}>
              <Image
                src="/img/movies/movie_5.jpg"
                height={370}
                width={240}
                alt="backdrop netflix"
                objectFit="cover"
              />
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Typography
              variant="h4"
              component="h4"
              sx={{ fontWeight: '700', color: 'white' }}>
              Avatar
            </Typography>
            <Typography
              component="p"
              sx={{ color: '#A2A4A9', marginTop: '5px' }}>
              ENGLISH, VIET NAME, HINDI, TELEGU
            </Typography>
            <Box
              sx={{
                color: '#A2A4A9',
                padding: '10px 20px',

                borderStyle: 'solid',
                borderColor: 'gray',
                cursor: 'pointer',
                fontSize: '12px',
                marginTop: '17px',
                borderRadius: '50px',
                borderWidth: '1px',
                width: '90px',
              }}>
              HORROR
            </Box>
            <Box sx={{ display: 'flex', color: '#bdbdbd', marginTop: '18px' }}>
              <CalendarMonthIcon />
              <Typography sx={{ marginLeft: '5px', marginRight: '20px' }}>
                06 Dec, 2020
              </Typography>
              <AccessTimeIcon />
              <Typography sx={{ marginLeft: '5px' }}>2 hrs 50 mins</Typography>
            </Box>
            <Box sx={{ marginTop: '35px' }}>
              <Grid container>
                <Grid item xs={8} sx={{ marginTop: '35px' }}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          justifyItems: 'center',
                          textAlign: 'center',
                        }}>
                        <Image
                          src="/img/apple.png"
                          width={30}
                          height={30}
                          alt="apple"
                        />
                        <Typography
                          sx={{ marginLeft: '10px', marginTop: '5px' }}>
                          20%
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          justifyItems: 'center',
                          marginTop: '10px',
                        }}>
                        Tomatometer
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          justifyItems: 'center',
                          textAlign: 'center',
                        }}>
                        {' '}
                        <Image
                          src="/img/popcorn.png"
                          width={30}
                          height={30}
                          sx={{ marginRight: '7px' }}
                          alt="popcorn"
                        />
                        <Typography
                          sx={{ marginLeft: '10px', marginTop: '5px' }}>
                          30%
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          justifyItems: 'center',
                          marginTop: '10px',
                        }}>
                        Audience Score
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          justifyItems: 'center',
                          textAlign: 'center',
                        }}>
                        {' '}
                        <Typography sx={{ marginRight: '5px' }}>4.5</Typography>
                        <Rating
                          name="size-small"
                          defaultValue={5}
                          size="small"
                        />
                      </Box>

                      <Typography
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          justifyItems: 'center',
                          marginTop: '15px',
                        }}>
                        Users Rating
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      justifyItems: 'center',
                      marginTop: '30px',
                      marginLeft: '40px',
                    }}>
                    <Box
                      sx={{
                        backgroundImage: `linear-gradient(
                        to right,#f73378,#03a9f4
                      )`,
                        padding: '15px 25px',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontWeight: '700',
                        '&:hover': {
                          boxShadow:
                            'rgba(61,90,254,.25) 0px 14px 28px, rgba(61,90,254,.35) 0px 10px 10px',
                        },
                      }}>
                      BOOK TICKETS
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          height: '400px',
          backgroundColor: '#001232',
        }}></Box>
    </Box>
  );
};

export default moiveDetails;
