import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: clamp(0.8rem, 2vw, 1.2rem);
  background: transparent;
  backdrop-filter: blur(10px);
  box-shadow: 8px 8px 12px black;
  border: 1px solid gray;
  border-radius: 16px;
  transition: transform 0.2s ease;

  h3 {
    text-align: center;
    margin: 0 0 1rem 0;
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    line-height: 1.3;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 80%;
    height: 80%;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
    box-shadow: 10px 10px 15px black;
    border: 1px solid gray;

    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ProductInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;

  p {
    font-size: clamp(0.85rem, 1vw, 1.1rem);
    letter-spacing: 0.5px;
    margin: 0;
  }
`;

export const CartBtn = styled.button`
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: clamp(0.8rem, 0.9vw, 1rem);
  padding: 0.5rem 0.9rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(250, 29, 178, 0.15);
    border-color: #fa1db2;
    color: #fa1db2;
  }
`;
