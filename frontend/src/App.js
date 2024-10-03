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
    
      <Router basename="/E-commerce">
      <Routes>
      <Header/>
      <Route path="/E-commerce" element={<Home/>} /> 
        <Route path="/" element={<Home/>} />  
        <Route path="/product" element={<Product />} /> 
        <Route path="/productlist1" element={<Productlist1/>} /> 
        <Route path="/gallery" element={<Gallery/>} /> 
        <Route path="/about" element={<Aboutus/>} /> 
        <Route path="/contact" element={<ContactUs/>} /> 
      </Routes>
    </Router>
      <Footer/>
    </div>
  );
}

export default App;
