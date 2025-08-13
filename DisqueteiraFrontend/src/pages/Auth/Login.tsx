import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // TODO: send login request to backend
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: 350 }} component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
          Sign In
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
