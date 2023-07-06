import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import TrainPage from './component/TrainPage';
import RegisterForm from './component/RegisterForm';
import NavBar from './component/Navbar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<RegisterForm />} />
      <Route path='/trains' element={<HomePage />} />
      <Route path='/train/:id' element={<TrainPage />} />
    </Routes>
    // <div>
    //   <HomePage />
    //   <TrainPage />
    //   <RegisterForm />
    //   <AuthForm />
    // </div>
  );
}

export default App;
