import "./App.css";
import { Allroutes } from "./Allroutes/Alloutes";
import Navbar from "./components/Components/Navbar";
import ProfileRoutes from "./components/UserComponent/Profile/ProfileRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <ProfileRoutes />
    </div>
  );
}

export default App;
