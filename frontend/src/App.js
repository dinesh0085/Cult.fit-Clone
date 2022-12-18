import { useState } from "react";
import { Allroutes } from "./Allroutes/Allroutes";
import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {

  const [c,setc]=useState("#15171C")


  return (
    <div className="App">
      <Navbar c={c} />
      <Allroutes setc={setc} />
      <Footer /> 
    </div>
  );
}

export default App;
