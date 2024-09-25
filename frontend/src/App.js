import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './components/home';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <Home/>
      <Product/>
    </div>
  );
}

export default App;
