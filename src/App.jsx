import "./App.css";
import { Route, Routes } from "react-router-dom";
// IMPORTING COMPONENTS

import 'bootstrap/dist/css/bootstrap.min.css';



import Nav_Bar from "./Component/Nav_Bar";
import Home from "./Component/Home";
import About from "./Component/About";
import Not_Found from "./Component/Not_Found";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import Protected from "./Component/Protected";

function App() {
  return (
    <>
      <Nav_Bar />
      <Routes>
        <Route path="/" element={<Protected Comp={Home}/>}/>
        <Route path="/about" element={<Protected Comp={About}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Not_Found />} />
        {/* Test  */}
      </Routes>
    </>
  );
}

export default App;
