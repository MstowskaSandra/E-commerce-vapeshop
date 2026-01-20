import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/nav/Nav.jsx";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Stores from "./pages/stores/Stores.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Cart from "./pages/cart/Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produkty" element={<Products />} />
            <Route path="/sklepy" element={<Stores />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/koszyk" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
