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
import { CheckBox } from '@mui/icons-material';

const navItems = [
  'About',
  'Terms Of Use',
  'Privacy Policy ',
  'FAQ',
  'Feedback',
];
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#001232',
        padding: '25px 130px',
        color: 'white',
      }}>
      <Box
        sx={{
          marginTop: '40px',
          marginBottom: '25px',
          borderBottom: '.3px solid white',
        }}></Box>
      <Grid container>
        <Grid item xs={6}>
          <Typography>
            Copyrigt © 2023. All Rights Reserved By{' '}
            <Typography component="span" sx={{ color: '#27E610' }}>
              MOGAND
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              justifyItems: 'center',
            }}>
            {navItems.map((item) => (
              <Typography key={item} sx={{ color: '#fff', marginLeft: '25px' }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
