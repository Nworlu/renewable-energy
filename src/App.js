import "./App.css"
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from "./Pages/Login";
import MyAccount from "./Pages/MyAccount";
import Contact from './Pages/Contact';
// import Checkout from './Pages/Checkout';
import About from './Pages/About';
import Shop from "./Pages/Shop";
const App = () => {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Myaccount" element={<MyAccount />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Shop" element={<Shop />} />
          <Route exact path="/About" element={<About />} />
          {/* <Route exact path="/Checkout" element={<Checkout />} /> */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
