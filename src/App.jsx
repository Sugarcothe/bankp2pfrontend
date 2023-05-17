import "./App.css";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Register />}
          linktext="/Login"
          login="Do you have an account? Login"
        />
        <Route path="/Login" element={<Login />} linktext="/" />
        <Route path="/Dashboard" element={<Dashboard />} linktext="/" />
      </Routes>
    </>
  );
}

export default App;
