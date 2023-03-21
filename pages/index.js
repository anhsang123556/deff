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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,

  padding: '5px 5px',
  border: '1px solid',
  borderRadius: '50px',
  marginRight: '10px',
  backgroundColor: '#00b8d4',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0288d1',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.5rem rgba(0,123,255,.5)',
  },
});

export default function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: '#001232',
          // padding: '30px 70px',
          position: 'relative',
          zIndex: 500,
        }}>
        <Box
          sx={{
            height: '300px',
            width: '1100px',
            transform: 'translateY(-100px) translateX(120px)',
            bottom: '1000',
            left: '10',
            zIndex: 1000,
            backgroundColor: '#5e35b1',
          }}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                component="p"
                color="#4dd0e1"
                fontWeight="500"
                sx={{ marginLeft: '33px' }}>
                WELCOME TO BOLETO
              </Typography>
              <Typography
                variant="h4"
                component="p"
                color="common.white"
                sx={{ fontSize: '30px', marginLeft: '33px' }}>
                WHAT ARE YOU LOOKING FOR
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  justifyItems: 'center',
                }}>
                <Button
                  variant="contained"
                  fullWidth={true}
                  sx={{
                    display: 'flex',
                    marginRight: '10px',
                    borderRadius: '50px',
                    backgroundColor: '#4dabf5',
                    padding: '7px 30px',
                    cursor: 'pointer',
                    '&:focus': {},
                  }}>
                  <LiveTvIcon sx={{ color: 'purple', fontSize: 35 }} />
                  <Box
                    // startIcon={<LiveTvIcon sx={{ color: 'red' }} fontSizeLarge />}
                    sx={{
                      display: 'flex',
                      marginLeft: '5px',
                      fontSize: '20px',

                      justifiContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      fontWeight: '500',

                      color: 'white',
                    }}>
                    MOVIE
                  </Box>
                </Button>

                <Button
                  variant="contained"
                  fullWidth={true}
                  sx={{
                    display: 'flex',
                    marginRight: '10px',
                    borderRadius: '50px',
                    backgroundColor: '#4dabf5',
                    padding: '7px 30px',
                    cursor: 'pointer',
                  }}>
                  <CelebrationIcon sx={{ color: 'yellow', fontSize: 35 }} />
                  <Box
                    // startIcon={<LiveTvIcon sx={{ color: 'red' }} fontSizeLarge />}
                    sx={{
                      display: 'flex',
                      marginLeft: '5px',
                      fontSize: '20px',

                      justifiContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      fontWeight: '500',

                      color: 'white',
                    }}>
                    EVENTS
                  </Box>
                </Button>
                <Button
                  variant="contained"
                  fullWidth={true}
                  sx={{
                    display: 'flex',
                    marginRight: '30px',
                    borderRadius: '50px',
                    backgroundColor: '#4dabf5',
                    padding: '7px 30px',
                    cursor: 'pointer',
                  }}>
                  <SportsSoccerIcon sx={{ color: '#76ff03', fontSize: 35 }} />
                  <Box
                    // startIcon={<LiveTvIcon sx={{ color: 'red' }} fontSizeLarge />}
                    sx={{
                      display: 'flex',
                      marginLeft: '5px',
                      fontSize: '20px',

                      justifiContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      fontWeight: '500',

                      color: 'white',
                    }}>
                    SPORTS
                  </Box>
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            sx={{
              position: 'relative',
              margin: '30px 33px',
              height: '130px',
              width: 'auto',
              // backgroundColor: '#060B53',
              // opacity: '0',
              color: 'white',
              zIndex: '5000',
              '&::after': {
                position: 'absolute',
                content: '""',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                background: 'rgba(0, 0, 0,.3)',
                // backgroundImage: `linear-gradient(
                //         to bottom,
                //         rgba(0, 0, 0, 0.9) 0,
                //         rgba(0, 0, 0, 0.1) 60%,
                //         rgba(0, 0, 0, 0.8) 100%,

                //       )`,
              },
            }}>
            <Grid item xs={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifiContent: 'center',
                  justifyItems: 'center',
                  position: 'relative',
                  color: 'white',
                  zIndex: '10000',
                }}>
                <TextField
                  id="standard-search"
                  label="Search fo Movies"
                  type="search"
                  variant="standard"
                  color="primary"
                  sx={{
                    borderBottom: '2px solid white',
                    color: 'white',
                    display: 'inline-block',
                    '& input': {
                      color: 'white',
                    },
                    '& label': {
                      color: 'white',
                    },
                  }}
                />
                <SearchIcon
                  sx={{
                    position: 'absolute',
                    top: '17px',
                    right: '15px',
                    paddingBottom: '10px',
                    justifiContent: 'center',
                    justifyItems: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '33px',
                    borderBottom: '2px solid white',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  justifyItems: 'center',
                  alignItems: 'center',
                  marginTop: '10px',
                  zIndex: '10000',
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    backgroundColor: '#e0e0e0',
                    height: '40px',
                    width: '40px',
                    borderRadius: '50%',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    alignItems: 'center',
                    zIndex: '10000',
                  }}>
                  <LocationCityIcon sx={{ color: '#00c853' }} />
                </Box>
                <Typography component="p" sx={{ zIndex: '10000' }}>
                  City
                </Typography>
                <Select
                  name="lang"
                  variant="outlined"
                  size="small"
                  defaultValue="VN"
                  sx={{
                    color: 'white',
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderWidth: '.5px',
                    zIndex: '10000',
                    '&:focus': {
                      borderColor: 'white',
                    },
                    '& .MuiSelect-icon': {
                      color: 'white',
                    },
                    '& 	.MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}>
                  <MenuItem value="VN">Da Nang</MenuItem>
                  <MenuItem value="EL">Ha Noi</MenuItem>
                  <MenuItem value="VN">Ho Chi Minh</MenuItem>
                  <MenuItem value="EL">Can Tho</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  justifyItems: 'center',
                  alignItems: 'center',
                  marginTop: '10px',
                  zIndex: '10000',
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    backgroundColor: '#e0e0e0',
                    height: '40px',
                    width: '40px',
                    borderRadius: '50%',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    alignItems: 'center',
                    zIndex: '10000',
                  }}>
                  <CalendarMonthIcon sx={{ color: '#00c853' }} />
                </Box>
                <Typography component="p" sx={{ zIndex: '10000' }}>
                  Date
                </Typography>
                <Select
                  name="lang"
                  variant="outlined"
                  size="small"
                  defaultValue="VN"
                  sx={{
                    color: 'white',
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderWidth: '1px',
                    zIndex: '10000',
                    '&:focus': {
                      borderColor: 'white',
                    },
                    '& .MuiSelect-icon': {
                      color: 'white',
                    },
                    '& 	.MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}>
                  <MenuItem value="VN">12/3/2023</MenuItem>
                  <MenuItem value="EL">14/3/2023</MenuItem>
                  <MenuItem value="VN">15/3/2023</MenuItem>
                  <MenuItem value="EL">16/3/2023</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  justifyItems: 'center',
                  alignItems: 'center',
                  marginTop: '10px',
                  marginRight: '15px',
                  zIndex: '10000',
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    backgroundColor: '#e0e0e0',
                    height: '40px',
                    width: '40px',
                    borderRadius: '50%',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    alignItems: 'center',
                    zIndex: '10000',
                  }}>
                  <MovieIcon sx={{ color: '#00c853' }} />
                </Box>
                <Typography component="p" sx={{ zIndex: '10000' }}>
                  Cinema
                </Typography>
                <Select
                  name="lang"
                  variant="outlined"
                  size="small"
                  defaultValue="VN"
                  sx={{
                    color: 'white',
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderWidth: '1px',
                    zIndex: '10000',
                    '&:focus': {
                      borderColor: 'white',
                    },
                    '& .MuiSelect-icon': {
                      color: 'white',
                    },
                    '& 	.MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}>
                  <MenuItem value="VN">Lotte</MenuItem>
                  <MenuItem value="EL">Vincom</MenuItem>
                  <MenuItem value="VN">Galaxy</MenuItem>
                  <MenuItem value="EL">Corpmart</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            height: '100px',
            padding: '25px 130px',
            marginTop: '20px',
          }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontWeight: '900', color: 'white' }}>
                MOVIES
              </Typography>
              <Typography variant="h6" component="p" sx={{ color: 'white' }}>
                Be sure not to miss these Movies today.
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 20px',
              }}>
              <BootstrapButton
                variant="contained"
                fullWidth={true}
                disableRipple>
                NOW SHOWING
              </BootstrapButton>
              <BootstrapButton
                variant="contained"
                fullWidth={true}
                disableRipple>
                COMMING SOON
              </BootstrapButton>
              <BootstrapButton
                variant="contained"
                fullWidth={true}
                disableRipple>
                EXCLUSIVE
              </BootstrapButton>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            height: '550px',
            marginTop: '20px',
            padding: '20px 130px',
            color: 'white',
          }}>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <Link href="/moiveDetails">
                {' '}
                <Image
                  src="/img/movies/movie_1.jpg"
                  width={257}
                  height={350}
                  alt="movie 1 "
                  sx={{ cursor: 'pointer' }}
                />
              </Link>

              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                    Robot
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#">
                {' '}
                <Image src="/img/movies/movie_2.jpg" width={257} height={350} />
              </Link>

              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Titanic
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_3.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Home Alone
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_4.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Harry Potter
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_5.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Avatar
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_6.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Gati
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box
          sx={{
            height: '100px',
            padding: '25px 130px',
            marginTop: '70px',
          }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontWeight: '900', color: 'white' }}>
                EVENTS
              </Typography>
              <Typography variant="h6" component="p" sx={{ color: 'white' }}>
                Be sure not to miss these Movies today.
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 20px',
              }}>
              <BootstrapButton
                variant="contained"
                fullWidth={true}
                disableRipple>
                NOW SHOWING
              </BootstrapButton>
              <BootstrapButton
                variant="contained"
                fullWidth={true}
                disableRipple>
                COMMING SOON
              </BootstrapButton>
              <BootstrapButton
                variant="contained"
                fullWidth={true}
                disableRipple>
                EXCLUSIVE
              </BootstrapButton>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            height: '550px',
            marginTop: '20px',
            padding: '20px 130px',
            color: 'white',
          }}>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <Link href="#">
                {' '}
                <Image
                  src="/img/movies/movie_1.jpg"
                  width={257}
                  height={350}
                  alt="movie 1 "
                  sx={{ cursor: 'pointer' }}
                />
              </Link>

              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Robot
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#">
                {' '}
                <Image src="/img/movies/movie_2.jpg" width={257} height={350} />
              </Link>

              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Titanic
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_3.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Home Alone
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_4.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Harry Potter
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_5.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Avatar
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_6.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Gati
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box
          sx={{
            height: '100px',
            padding: '25px 130px',
            marginTop: '70px',
          }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontWeight: '900', color: 'white' }}>
                SPORTS
              </Typography>
              <Typography variant="h6" component="p" sx={{ color: 'white' }}>
                Be sure not to miss these Movies today.
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 20px',
              }}>
              <BootstrapButton
                variant="contained"
                fullWidth={true}
                disableRipple>
                NOW SHOWING
              </BootstrapButton>
              <BootstrapButton
                variant="contained"
                fullWidth={true}
                disableRipple>
                COMMING SOON
              </BootstrapButton>
              <BootstrapButton
                variant="contained"
                fullWidth={true}
                disableRipple>
                EXCLUSIVE
              </BootstrapButton>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            height: '550px',
            marginTop: '20px',
            padding: '20px 130px',
            color: 'white',
          }}>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <Link href="#">
                {' '}
                <Image
                  src="/img/movies/movie_1.jpg"
                  width={257}
                  height={350}
                  alt="movie 1 "
                  sx={{ cursor: 'pointer' }}
                />
              </Link>

              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Robot
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#">
                {' '}
                <Image src="/img/movies/movie_2.jpg" width={257} height={350} />
              </Link>

              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Titanic
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_3.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Home Alone
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_4.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Harry Potter
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_5.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Avatar
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/movies/movie_6.jpg" width={257} height={350} />
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    margin: '5px 20px',
                    marginBottom: '10px',
                    padding: '10px 10px',
                    borderBottom: '.3px solid #80cbc4',
                  }}>
                  Gati
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', margin: '20px 17px' }}>
                <Image
                  src="/img/apple.png"
                  width={20}
                  height={20}
                  alt="apple"
                />
                <Typography sx={{ marginRight: '20px', marginLeft: '5px' }}>
                  20%
                </Typography>
                <Image
                  src="/img/popcorn.png"
                  width={20}
                  height={20}
                  sx={{ marginRight: '7px' }}
                  alt="popcorn"
                />
                <Typography sx={{ marginLeft: '5px' }}>30%</Typography>
              </Box>
            </SwiperSlide>
          </Swiper>
         
        </Box>
      </Box>
    </>
  );
}
