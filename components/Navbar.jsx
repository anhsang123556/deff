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

const navItems = ['Home', 'Movie', 'Event', 'Sport', 'About', 'Contact'];

const Navbar = () => {
  return (
    <AppBar
      sx={{
        borderBottom: `1px solid ${grey[700]}`,
        backgroundColor: '#0A1E5E',
        //   padding: "5px 5px",
        boxShadow: '0 0',
        width: '100%',
      }}>
      <ToolBar sx={{ margin: '10px 20px' }}>
        <Grid
          container
          alignItems="center"
          spacing={4}
          // sx={{ width: "100%" }}
        >
          <Grid item xs={4}>
            <Image
              src="/img/logo.png"
              height="55"
              width="180"
              alt="Netflix logo"
            />
          </Grid>

          <Grid item xs={5}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff', fontSize: 18 }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs="auto">
            <Select
              name="lang"
              variant="outlined"
              size="small"
              defaultValue="VN"
              sx={{
                color: 'common.white',
                borderStyle: 'solid',
                borderColor: 'common.white',
                borderWidth: '1px',
                '&:focus': {
                  borderColor: 'common.white',
                },
                '& .MuiSelect-icon': {
                  color: 'common.white',
                },
                '& 	.MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}>
              <MenuItem value="VN">Viet Nam</MenuItem>
              <MenuItem value="EL">English</MenuItem>
            </Select>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              size="large"
              color="primary"
              sx={{
                borderRadius: '5px',
                //   width: "100%",
              }}>
              Sign in
            </Button>
          </Grid>
        </Grid>
      </ToolBar>
    </AppBar>
  );
};

export default Navbar;
