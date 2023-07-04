import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Checkout from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <div className='body-container'>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/productDetails/:productId' element={<ProductDetails />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
