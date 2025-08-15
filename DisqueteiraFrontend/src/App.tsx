import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import MiniDrawer from './components/MuiResponsibleDrawer';
import { QueryClientProvider, useQueryClient } from '@tanstack/react-query';

const App = () => {
  const client = useQueryClient();

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <QueryClientProvider client={client}></QueryClientProvider>
        <MiniDrawer />
      </BrowserRouter>
    </>
  );
};

export default App;
