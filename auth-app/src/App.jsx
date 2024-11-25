import React from 'react';
import Navbar from './Components/Navbar';
import Loading from './Containers/Loading';
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const SignUp = lazy(()=> import('./Containers/Signup'));
const SignIn = lazy(()=> import('./Containers/Signin'));
const About = lazy(()=> import('./Containers/About'));
// const Profile = lazy(()=> import('./Containers/Profile'));
const Home = lazy(()=> import('./Containers/Home'));

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <Router>
    <div>
      <Navbar/>
      {/* Loading UI */}
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/home' element={<Home/>} />
        {/* <Route path='/profile' element={<Profile/>} /> */}
        <Route path='/about' element={<About/>} />
      </Routes>
      </Suspense>
    </div>
    </Router>
  );
};

export default App;