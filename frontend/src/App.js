import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import { Allroutes } from './Allroutes/Alloutes';
 
 

function App() {
  return (
    <div className="App">
       
         <Navbar/>
          <Allroutes/>
      
       
    </div>
  );
}

export default App;
