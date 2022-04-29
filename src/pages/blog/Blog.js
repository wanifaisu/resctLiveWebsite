import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Logo2 from '../../images/4side.jpg';
import Logo3 from '../../images/3side.jpg';
import Logo4 from '../../images/2side.jpg';
import Header from '../../component/Header/Header';
import Crousel from '../../component/Crousel/Crousel';
import Footer from '../../component/Footer/Footer';
import CardCamp from '../../component/Card/CardCamp';
function Blog(props) {
  const labels = [
    {
      label: 'Help Desk',
      number: 1,
      date: '20 - 07 - 2022',
      image: 'https://source.unsplash.com/random/800x500?2',
      heading: 'hj dc dc jd cdnd  dndbc dcnnd d c c ds cnbds cdn  d s cn bds ',
    },
    {
      label: 'Forest',
      date: '04 - 02 - 2022',
      number: 2,
      image: 'https://source.unsplash.com/random/800x500?1',
      heading:
        'Mount everist is the toppest of all the mountatin in the world ',
    },
    {
      label: 'Creature',
      number: 3,
      date: '07 - 07 - 2022',
      image: 'https://source.unsplash.com/random/800x500?3',
      heading:
        'Peer ki galy is the best of all the mountains in the india so you are there.',
    },
  ];
  return (
    <>
      <Header />
      <div style={{ padding: '1rem' }}>
        {' '}
        <Crousel />
      </div>

      <Grid container>
        {labels.map(item => (
          <Grid item xs={12} md={4} sx={{ p: 3 }}>
            <CardActionArea component="a" href="#">
              <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {item.label}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {item.date}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {item.heading}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                  src={item.image}
                />
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      <CardCamp />
      <Footer />
    </>
  );
}

Blog.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blog;
