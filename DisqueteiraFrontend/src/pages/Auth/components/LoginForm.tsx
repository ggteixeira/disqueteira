import { Paper, Typography, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, width: 350 }}
      component="form"
      onSubmit={handleSubmit((data) => {
        console.log(JSON.stringify(data));
      })}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        React Hook Form Login
      </Typography>
      <TextField placeholder="Email" fullWidth margin="normal" {...register('email')} />

      <TextField placeholder="Password" fullWidth margin="normal" required {...register('password')} />

      {errors.password && <span>This field is required</span>}

      <Button sx={{ mt: 2 }} fullWidth variant="contained" type="submit">
        Log in
      </Button>
    </Paper>
  );
};

export default LoginForm;
