import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root */}
       <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        {/* Custom 404 */}
        <Route path="*" element={<h1>404 – Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
