import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/header';
import Home from './components/home/home';
import Footer from './components/footer';
import Product from './components/home/product';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
