import { Container } from '@mui/material';
import LoginForm from './components/LoginForm';

function Login() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <LoginForm />
    </Container>
  );
}

export default Login;
