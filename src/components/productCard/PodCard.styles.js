import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
     background: transparent;
    backdrop-filter: blur(10px);
    box-shadow: 8px 8px 12px black;
    border: 1px solid gray;
    border-radius: 16px;

    h3 {
        height: 3rem;
        font-size: larger;
        font-weight: bold;
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
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  width: 100%;

  p {
    font-size: large;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0;
  }
`;

export const CartBtn = styled.button`
  justify-self: center;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1rem;

  border-radius: 16px;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;

  box-shadow:
    0 6px 14px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);

  transition:
    transform 220ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 220ms ease,
    background 220ms ease;

  &:hover {
    background: rgba(250, 29, 178, 0.15);
    border-color: #fa1db2;
    color: #fa1db2;

    box-shadow:
      0 0 12px rgba(250, 29, 178, 0.6),
      0 0 28px rgba(250, 29, 178, 0.8),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }
`;