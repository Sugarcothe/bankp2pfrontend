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
          path="/Register"
          element={<Register />}
          linktext="/"
          login="Do you have an account? Login"
        />
        <Route path="/" element={<Login />} linktext="/Register" />

        {/* Protected Route */}

        <Route path="/Dashboard" element={<Dashboard />} linktext="/" />
        <Route path="/Missing" element={<Missing />} linktext="/" />
      </Routes>
    </>
  );
}

export default App;
