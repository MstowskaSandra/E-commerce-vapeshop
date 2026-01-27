import * as S from "./styles/App.styles.js";
import GlobalStyles from "./styles/GlobalStyles.js";
import PersistedProvider from "./components/PersistedProvider.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Nav from "./components/nav/Nav.jsx";
import AgeVerificationModal from "./components/ageModal/AgeVerificationModal.jsx";
import OrderForm from "./components/orderForm/OrderForm.jsx";
import PodList from "./components/productList/PodList.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Stores from "./pages/stores/Stores.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Cart from "./pages/cart/Cart.jsx";
import OrderSummary from "./pages/summary/OrderSummary.jsx";

import { useAgeVerification } from "./hooks/useAgeVerification.js";

function App() {
  const { isVerified, handleAccept, handleReject } = useAgeVerification();

  return (
    <>
      <GlobalStyles />
      <PersistedProvider>
        <BrowserRouter>
          <S.Body>
            <Nav />
            <S.Main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produkty" element={<Products />} />
                <Route path="/sklepy" element={<Stores />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/koszyk" element={<Cart />} />
                <Route path="/form" element={<OrderForm />} />
                <Route path="/podsumowanie" element={<OrderSummary />} />

                <Route path="/products/:slug" element={<ProductDetails />} />
                <Route path="/pods/:slug" element={<ProductDetails />} />

                <Route path="/products" element={<ProductList />} />
                <Route path="/pods" element={<PodList />} />

                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </S.Main>
          </S.Body>
        </BrowserRouter>
      </PersistedProvider>

      {!isVerified && (
        <AgeVerificationModal onAccept={handleAccept} onReject={handleReject} />
      )}
    </>
  );
}

export default App;
