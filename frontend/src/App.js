 
import { Allroutes } from './Allroutes/Allroutes';
import './App.css';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
 import Cart from "./pages/Cart";
 


function App() {
  return (
    <div className="App">
      <Cart></Cart>
    <Navbar />
    <Allroutes />
    <Footer/>
  </div>
  );
}

export default App;