import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/header';
import Home from './components/home/home';
import Footer from './components/footer';
import Product from './components/home/product';
import Productlist1 from './components/products/productlist1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />  {/* Default path renders Product */}
        <Route path="/product" element={<Product />} /> {/* Clicking "View Product" takes user to Page */}
        <Route path="/productlist1" element={<Productlist1/>} /> 

      </Routes>
    </Router>
      <Footer/>
    </div>
  );
}

export default App;
