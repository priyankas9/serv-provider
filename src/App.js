import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List"; 
import Single from "./pages/single/Single";
import Edit from "./pages/edit/Edit";
import New from "./pages/new/New";
import Feedback from "./pages/feedback/Feedback";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./style/dark.scss"
import {  driverInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";




function App() {
  const {darkMode } = useContext(DarkModeContext)
  return (
    <div className={ darkMode ? "app dark ":  "app "}>
       <BrowserRouter>
    <Routes>
     <Route path="/"> 
      <Route index element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route path="drivers"> 
     <Route index element={<List/>} />
     <Route path=":driverId" element={<Single/>} />
     <Route path="new" element={<New inputs = {driverInputs} title="Add New Driver"/>} />
      <Route path="edit" element={<Edit inputs = {driverInputs}  title=" Update User"/>} />
     
    
     </Route>
     
     <Route path="feedback" element={<Feedback /> } > 
     </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
