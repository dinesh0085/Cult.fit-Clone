 
import { Allroutes } from './Allroutes/Allroutes';
import './App.css';
import { Footer } from './Components/Footer';
import Navbar from './Components/Navbar';
 
 


function App() {
  return (
    <div className="App">
    <Navbar />
    <Allroutes />
    <Footer/>
  </div>
  );
}

export default App;