import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Link,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './style.css';

import { useNavigate, useLocation } from 'react-router-dom';
import { Box } from '@mui/system';

const Forgot = () => {
  // for navigation through routes
  let navigate = useNavigate();
  // for getting url info
  const location = useLocation();

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#e1ebfa',
          minHeight: '100vh',
          minWidth: '100%',
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '8rem',
          }}
        >
          <Typography>
            <img
              src={'./logo512.png'}
              style={{
                height: '200px',
                width: '300px',
                margin: '10px',
                objectFit: 'contain',
              }}
              alt={'ROI'}
              // onClick={GO TO Website}
              sx={{ mt: 2, mb: '10px' }}
            />
          </Typography>

          <form sx={{ width: '100%', mt: 3 }} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth={true}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth={true}
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth={true}
              variant="contained"
              color="primary"
              className="reset__button"
              sx={{ mt: 3, mr: 0, mb: 2 }}
            >
              Set Password
            </Button>
          </form>
          <br />
          <br />
          <Typography>
            <Link
              sx={{ textDecoration: 'none', cursor: 'pointer' }}
              onClick={() => {
                window.location.pathname = '/login';
              }}
            >
              Already a user, Login!
            </Link>
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Forgot;
