import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Details from "./pages/Details";
import ErrorPage from "./pages/ErrorPage";
export default function App() {
  return (
    <div>
      
      <Routes>
        <Route index element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Products/:id" element={<Details />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
