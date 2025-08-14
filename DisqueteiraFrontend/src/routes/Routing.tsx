import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import Home from '@/pages/Home/Home';
import Artists from '@/pages/Artists';
import Records from '@/pages/Records';
import SignIn from '@/pages/Auth/Signin';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </>
  );
};

export default Routing;
