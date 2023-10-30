import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Main from './modules/Main/Main';
import Footer from './modules/Footer/Footer';
import Payment from './modules/Payment/Payment';


import './styles/styles.scss'



function App() {
  return (
  <BrowserRouter >
      <Navbar title="ШКОЛА испанского ЯЗЫКА  «ЛаВИта» в петербурге"  />
    <Routes>
      <Route path="/"  element={<Main/> }  />
      <Route path="/payment"  element={<Payment />} />
    </Routes>
    <Footer />
  </BrowserRouter >
  );
}

export default App;


