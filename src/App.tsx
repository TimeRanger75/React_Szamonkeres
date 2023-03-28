import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import Experience from './components/Experience';
import Contact from './components/Contact';

class App extends Component<{}>{
  render() {
    return <div> 
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/tapasztalat' element={<Experience/>}></Route>
        <Route path='/idopont' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  }
}
export default App;
