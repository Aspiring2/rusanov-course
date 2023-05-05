import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import servicesData from '../assets/data/serviceData.json';
import { Box, CardMedia } from '@mui/material';



function Service() {
  const { serviceId } = useParams();
  const services = servicesData.services;
  
  

  const service = services.find(service => service.id === parseInt(serviceId));
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        {service.title}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          height="200"
          image={require(`../assets/images/${service.image}`).default}
          alt={service.title}
        />
      </Box>
      <Typography variant="body1" gutterBottom>
        {service.description}
      </Typography>
    </Container>
  );
}

export default Service;
