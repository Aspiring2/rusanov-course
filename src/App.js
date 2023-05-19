import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import Header from './components/Header';
import Home from './pages/Home';
import About from './components/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Project from './pages/AddProject/Project';
import Blog from './pages/Blog';
import FullPost from './pages/FullPost';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Reviews from './components/Reviews';
import Service from './components/Service';
import Login from './pages/Login/Login.js';
import Registration from './pages/Registration/Registration.js';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';

function App() {

  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  return (
    <div>
      <Header />
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/:id" element={<Project/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services/:serviceId" element={<Service/>} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/reviews" element={<Reviews/>} />
        <Route path="/blog/:postId" element={<FullPost/>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/register" element={<Registration/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
