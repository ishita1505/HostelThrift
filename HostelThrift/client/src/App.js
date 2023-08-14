import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';



import DataProvider from './context/DataProvider';


import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';



import Login from './components/account/Login'
import Home from './components/home/Home';
import Header from './components/header/Header';


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  
  return isAuthenticated? 
    <>
      <Header />
      <Outlet />
    </> : <Navigate replace to='/login' />
};

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64 }}>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

