// About.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to the Cat-Forum! Our mission is to provide a platform where cat lovers can explore various cat breeds and enjoy beautiful cat images. Our team is dedicated to bringing you the best cat content on the internet.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Our Projects
        </Typography>
        <Typography variant="body1" paragraph>
          <ul style={{width: 'fit-content', textAlign:'left', margin:'auto'}}>
            <li>Cat Breeds Encyclopedia: A comprehensive guide to different cat breeds.</li>
            <li>Cat Image Gallery: A vast collection of high-quality cat images.</li>
            <li>Adoption Resources: Connecting you with local cat adoption centers.</li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
