import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Button, Typography, Box } from '@mui/material';


const RegistrationWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', 
  marginTop: 50,
  marginBottom: 50,
  gap: '1rem',
});


const Registration = () => {
  return (
    <RegistrationWrapper>
      <Typography variant="h4" sx={{ mb: 5 }}>Register</Typography>
      <TextField label="Name" variant="outlined" />
      <TextField label="Email" variant="outlined" />
      <TextField label="Password" variant="outlined" />
      <Button variant="contained">Register</Button>
    </RegistrationWrapper>
  );
};

export default Registration;
