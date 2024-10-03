import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Product from './components/product';
import Productlist1 from './components/products/productlist1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/gallery';
import Aboutus from './components/aboutus';
import ContactUs from './components/contactus';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
      <Route path="/E-commerce" element={<Home/>} /> 
        <Route path="/" element={<Home/>} />  
        <Route path="/E-commerce/product" element={<Product />} /> 
        <Route path="/E-commerce/productlist1" element={<Productlist1/>} /> 
        <Route path="/E-commerce/gallery" element={<Gallery/>} /> 
        <Route path="/E-commerce/about" element={<Aboutus/>} /> 
        <Route path="/E-commerce/contact" element={<ContactUs/>} /> 



      </Routes>
    </Router>
      <Footer/>
    </div>
  );
}

export default App;
