import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';
import ResponsiveDrawer from './components/ResponsibleDrawer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <ResponsiveDrawer />
      </BrowserRouter>
    </>
  );
};

export default App;
