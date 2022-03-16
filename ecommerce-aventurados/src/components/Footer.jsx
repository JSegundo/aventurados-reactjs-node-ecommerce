import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Box, Link} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Aventurados
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Footer= () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '20vh',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography color='black' variant="body1">
          Regala Experiencias
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;