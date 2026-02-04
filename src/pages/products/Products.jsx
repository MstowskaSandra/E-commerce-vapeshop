import * as S from "./Products.styles";
import { useState } from "react";
import ProductList from "../../components/productList/ProductList";
import PodList from "../../components/productList/PodList";

const Products = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <S.ProductsContainer>
      <S.BtnsWrapper>
        <S.Button
          className={activeTab === "products" ? "active" : ""}
          onClick={() => setActiveTab("products")}
        >
          Liquidy
        </S.Button>
        <S.Button
          className={activeTab === "pods" ? "active" : ""}
          onClick={() => setActiveTab("pods")}
        >
          Urządzenia
        </S.Button>
      </S.BtnsWrapper>

      {activeTab === "products" && <ProductList />}
      {activeTab === "pods" && <PodList />}
    </S.ProductsContainer>
  );
};

export default Products;
