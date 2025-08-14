import { Container } from '@mui/material';
import SignInForm from './components/SignInForm';

function SignIn() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <SignInForm />
    </Container>
  );
}

export default SignIn;
