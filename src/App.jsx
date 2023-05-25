import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Missing from "./pages/Missing";

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

        {/* Protected Route */}

        <Route path="/Dashboard" element={<Dashboard />} linktext="/" />
        <Route path="/Missing" element={<Missing />} linktext="/" />
      </Routes>
    </>
  );
}

export default App;
