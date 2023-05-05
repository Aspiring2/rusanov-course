import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Project from './components/Project';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Reviews from './components/Reviews';
import Service from './components/Service';
import Login from './components/Login.js';
import Registration from './components/Registration.js';
function App() {
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
        <Route path="/blog/:postId" element={<BlogPost/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registration/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
