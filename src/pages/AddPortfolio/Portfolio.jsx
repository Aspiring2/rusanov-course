import React from 'react';
import Image from '../assets/images/about.jpg';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

function About() {
  return (
    <Container sx={{ py: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={6}>
            <img src={Image} alt="about" width="100%" />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1">
                Hi there! My name is John Doe and I am a full-stack web developer with 5 years of experience in building
                websites and web applications. I specialize in React.js and Node.js but I am also proficient in other
                front-end and back-end technologies such as HTML/CSS, JavaScript, Express.js, and MongoDB.
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1">
                I am passionate about creating clean, user-friendly, and high-performance websites and applications
                that deliver value to businesses and their customers. I am constantly learning and exploring new
                technologies to improve my skills and stay up-to-date with industry trends.
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1">
                When I am not coding, you can find me hiking in the mountains or exploring new coffee shops in the city.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default About;