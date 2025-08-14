import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

export default function CreateAccountPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // TODO: send signup request to backend
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: 400 }} component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Create New Account
        </Typography>

        <TextField fullWidth label="Full Name" margin="normal" value={name} onChange={(e) => setName(e.target.value)} />

        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Teste" />
        </FormGroup>

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </Paper>
    </Box>
  );
}
