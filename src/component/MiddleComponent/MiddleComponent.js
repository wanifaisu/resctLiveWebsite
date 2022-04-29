import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Map, GoogleApi, Wrapper } from 'google-maps-react';
import { GoogleApiWrapper } from 'google-maps-react';
import MApImg from '../../images/1side.jpg';
import Logo from '../../images/logo2.png';
import './style.css';
import ChatIcon from '@mui/icons-material/Chat';
class MiddleComponent extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item md={6} sx={{ width: '100%', height: '600px' }}>
          <Map
            google={this.props.google}
            style={{ width: '100%', height: '600px' }}
            zoom={10}
            initialCenter={{
              lat: 34.0837,
              lng: 74.7973,
            }}
          />
        </Grid>
        <Grid
          item
          md={6}
          sx={{ width: '100%', height: '600px' }}
          className="imageOpac"
        >
          <img
            src={MApImg}
            style={{ height: '500px', width: '100%', opacity: 0.3 }}
          />
          <div class="content" style={{ textAlign: 'center' }}>
            <img
              src={Logo}
              style={{
                width: '170px',
                height: '70px',
                paddingTop: '5rem',
                paddingLeft: '1rem',
              }}
            />
            <Typography sx={{ mt: 1, color: '#f8efa7', fontSize: '30px' }}>
              NEWTEC SOLU
            </Typography>
            <p>Lorem ipsum dolor sit amet, an his etiam torquatos.</p>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                }}
              >
                Phone Number :
              </Typography>
              <Typography
                sx={{
                  fontSize: '24px',
                }}
              >
                &nbsp; 7006747612
              </Typography>
            </div>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                }}
              >
                Email :
              </Typography>
              <Typography
                sx={{
                  fontSize: '24px',
                }}
              >
                &nbsp; wanifaisal155223@gmail.com
              </Typography>
            </div>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '35px',
                color: '#f8efa7',
              }}
            >
              Contact On
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#fff',
                opacity: '0.6',
                p: 2,
                mt: 1,
                pr: 5,
                pl: 5,
                borderRadius: '8px',
              }}
            >
              <ChatIcon sx={{ color: 'blue', pr: 1 }} />
              <Typography
                sx={{ color: 'blue', fontSize: '20px', fontWeight: 'bold' }}
              >
                Massage me
              </Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCM11 - OW1ExF9ppDm8rhb2f0OjOBbjnV5I',
})(MiddleComponent);
// AIzaSyCM11 - OW1ExF9ppDm8rhb2f0OjOBbjnV5I;
