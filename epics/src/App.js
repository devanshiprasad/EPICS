import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Bg from './components/Bg';
import Header from './components/Header';
import Button from './components/Button';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Bg/>
    <Header/>
    <span id=''><Button buttontext="Student Login"/></span> <span><Button buttontext="Teacher Login"/></span>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
   
  );
}
