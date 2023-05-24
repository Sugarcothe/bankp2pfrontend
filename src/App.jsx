import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

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
