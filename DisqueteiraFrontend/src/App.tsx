import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import MiniDrawer from './components/MuiResponsibleDrawer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <MiniDrawer />
      </BrowserRouter>
    </>
  );
};

export default App;
