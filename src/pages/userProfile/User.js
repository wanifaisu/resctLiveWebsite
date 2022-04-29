import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Fab, AppBar, Tabs, Tab, Box } from '@mui/material';

// import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import './style.css';

import { PhotoCamera } from '@mui/icons-material';
import Header from '../../component/Header/Header';

const User = () => {
  return (
    <>
      <Header />
      <div
        style={{
          background: `url('https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg') center center/ cover no-repeat`,
          padding: '10rem',
          margin: '-1rem 0 0 -1rem',
          width: 'calc(100% + 1rem)',
        }}
      ></div>
      <Grid container className="profile__container" spacing={2}>
        <Grid item sm={4} xs={12}>
          <Grid
            container
            className="height-100"
            style={{
              background: '#F7F7F7',
              display: 'flex',
              alignContent: 'flex-start',
            }}
          >
            <Grid
              item
              xs={12}
              style={{ textAlign: 'center', padding: '1rem' }}
              className="profile__img-container"
            >
              <figure className="profile__img">
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '100%',
                  }}
                  src="https://www.w3schools.com/howto/img_avatar.png"
                />
                <Fab
                  size="small"
                  className="userprofile__photo"
                  color="primary"
                  aria-label="add"
                >
                  <PhotoCamera />
                </Fab>
              </figure>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant="BUTTON TEXT" sx={{ marginBottom: '30px' }}>
                Faisal ashraf wani
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant="body2" gutterBottom>
                Srinagar kashmir
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* right section */}
        <Grid item sm={8} xs={12}>
          <div className="height-100" style={{ padding: '1px' }}>
            <FullWidthTabs />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
// Tabpanel
const TabPanel = props => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

// Tab Component
const FullWidthTabs = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <div style={{ background: '#F7F7F7', height: '100%' }}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Account" {...a11yProps(0)} />
            <Tab label="Security" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </div>
    </>
  );
};

export default User;
