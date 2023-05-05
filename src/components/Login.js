import { Link } from 'react-router-dom';
import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting username: ${username} and password: ${password}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 10 }}>
      <Typography variant="h4" sx={{ mb: 5 }}>Login</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" type="submit">Login</Button>
        <Typography variant="body2">Don't have an account? <Link to="/register">Register here</Link></Typography>
      </Box>
    </Box>
  );
};

export default Login;
