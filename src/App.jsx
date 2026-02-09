import * as S from "./styles/App.styles.js";
import GlobalStyles from "./styles/GlobalStyles.js";
import PersistedProvider from "./components/PersistedProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Nav from "./components/nav/Nav.jsx";
import Footer from "./components/footer/Footer.jsx";
import AgeVerificationModal from "./components/ageModal/AgeVerificationModal.jsx";
import OrderForm from "./components/orderForm/OrderForm.jsx";
import PodList from "./components/productList/PodList.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import ProductDetails from "./components/productDetails/ProductDetails.jsx";

import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Stores from "./pages/stores/Stores.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Cart from "./pages/cart/Cart.jsx";
import OrderSummary from "./pages/summary/OrderSummary.jsx";

import { useAgeVerification } from "./hooks/useAgeVerification.js";
import NotFound from "./pages/notFound/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";


function App() {
  const { isVerified, handleAccept, handleReject } = useAgeVerification();

  return (
    <>
      <GlobalStyles />
      <Toaster position="bottom-right" />
      <PersistedProvider>
        <BrowserRouter>
          <ScrollToTop />
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

                <Route path="*" element={<NotFound />} />
              </Routes>
            </S.Main>
            <Footer />
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
