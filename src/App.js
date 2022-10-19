import './App.css';
import Home from './components/Home';
import NavbarContainer from './components/NavbarContainer';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (

    <>
      <NavbarContainer />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
