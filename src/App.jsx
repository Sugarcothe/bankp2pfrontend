import "./App.css";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} linktext="/Login" />
        <Route path="/Login" element={<Login />} linktext="/" />
      </Routes>
    </>
  );
}

export default App;
