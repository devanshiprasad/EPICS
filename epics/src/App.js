import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Bg from './components/Bg';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Bg/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
   
  );
}
