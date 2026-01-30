import * as S from "./Products.styles";
import { useState } from "react";
import ProductList from "../../components/productList/ProductList";
import PodList from "../../components/productList/PodList";

const Products = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <S.ProductsContainer>
      <h1>Katalog produktów:</h1>
      <div className="tabs">
        <button
          className={activeTab === "products" ? "active" : ""}
          onClick={() => setActiveTab("products")}
        >
          Liquidy
        </button>
        <button
          className={activeTab === "pods" ? "active" : ""}
          onClick={() => setActiveTab("pods")}
        >
          Urządzenia
        </button>
      </div>

      {activeTab === "products" && <ProductList />}
      {activeTab === "pods" && <PodList />}
    </S.ProductsContainer>
  );
};

export default Products;
