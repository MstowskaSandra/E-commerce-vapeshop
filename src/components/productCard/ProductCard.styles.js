import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 1rem;
     background: transparent;
    backdrop-filter: blur(10px);
    box-shadow: 8px 8px 12px black;
    border: 1px solid gray;
    border-radius: 16px;

    h3 {
      height: 3rem;
      margin-bottom: 1rem;
    }

    &:hover {
      text-shadow: none;    
      color: inherit;
    }  
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 75%;
    max-width: 500px;
    height: auto;
    border-radius: 16px;
    box-shadow: 10px 10px 15px black;

    transition: all 0.3s ease;
    object-fit: cover;
    border: 1px solid gray;

    &:hover {
      transform: scale(1.05);
      border: 3px solid #fa1db2aa;
    }
  }
`;

export const ProductInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-grow: 1;

  p {
    font-size: larger;
    letter-spacing: 1px;
    margin: 0;
    margin-bottom: 0 !important;
  }
`;

export const CartBtn = styled.button`
    border: 2px solid gray;
    box-shadow: 8px 8px 12px black;
    
    &:hover {
      border-color: #fa1db2aa;
      transform: translateX(4px);
      transition: all 0.2s ease-in-out;
      box-shadow: 8px 8px 10px #fa1db2aa;
    }
`;