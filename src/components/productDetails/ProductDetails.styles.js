import styled from "styled-components";

export const ProductDetails = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: transparent;
  backdrop-filter: blur(10px);
  box-shadow: 8px 8px 12px black;
  border: 1px solid gray;
  border-radius: 16px;
`;

export const ProductImage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

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
  padding: 3rem;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 1rem;
  border-radius: 16px;

  p {
    font-size: large;
    font-weight: 500;
  }
`;

export const CartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 10rem;
  height: 3rem;
  border-radius: 20px;
  border: 3px solid black;
  box-shadow: 10px 10px 15px black;
  background-color: whitesmoke;
  color: black;

  &:hover {
    border-color: #fa1db2aa;
    transform: translateX(4px);
    transition: all 0.2s ease-in-out;
    box-shadow: 8px 8px 12px #fa1db2aa;
  }
`;

export const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 4rem;
  height: 2rem;
  background: transparent;
  backdrop-filter: blur(10px);
  box-shadow: 8px 8px 12px black;
  border: 1px solid gray;
  border-radius: 16px;
  &:hover {
    border-color: #fa1db2aa;
    transform: translateX(4px);
    transition: all 0.2s ease-in-out;
    box-shadow: 8px 8px 12px #fa1db2aa;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 0;
  margin: 0;

  p {
    font-size: medium;
    letter-spacing: 1px;
  }
`;
