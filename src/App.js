import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gigs from "./pages/Gigs";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GigDetails from "./pages/GigDetails";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/gigs" element={<Gigs />} />
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gigs/:id" element={<GigDetails />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
