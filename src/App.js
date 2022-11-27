import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';

// pages
import Home from './pages/home/Home';
import Price from './pages/price/Price';
import WhatWeDo from './pages/what-we-do/WhatWeDo';
import About from './pages/about/About';
import Faq from './pages/faq/Faq';
import Login from './pages/login/Login';
import Signup from './pages/sign-up/Signup';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<PrivateRoute />}>
              <Route index element={<Home />} />
            </Route>
            <Route path='price' element={<Price />} />
            <Route path='what-we-do' element={<WhatWeDo />} />
            <Route path='about' element={<About />} />
            <Route path='faq' element={<Faq />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
