import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const ProductDetails = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(1rem, 3vw, 2rem);
`;

export const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1rem, 3vw, 2rem);
  backdrop-filter: blur(10px);
  box-shadow: 8px 8px 12px black;
  border: 1px solid gray;
  border-radius: 16px;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(1.5rem, 3vw, 2rem);

  img {
    width: 100%;
    max-width: 24rem;
    height: auto;
    border-radius: 16px;
    box-shadow: 8px 8px 10px black;
    object-fit: cover;
    border: 1px solid gray;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      border: 3px solid #fa1db2aa;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 16rem;
    }
  }
`;

export const ProductInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(1rem, 4vw, 2rem);

  h2 {
    font-size: clamp(1.5rem, 3vw, 2.2rem);
  }

  p {
    font-size: clamp(1.1rem, 2vw, 1.2rem);
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.tablet}) {
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

export const CartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: clamp(8rem, 20vw, 10rem);
  height: 3rem;
  border-radius: 20px;
  border: 3px solid black;
  box-shadow: 8px 8px 10px black;
  background-color: whitesmoke;
  color: black;
  transition: all 0.2s ease-in-out;
  align-self: center;

  &:hover {
    border-color: #fa1db2aa;
    transform: translateX(4px);
    box-shadow: 8px 8px 10px #fa1db2aa;
  }
`;

export const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 4rem;
  height: 2.5rem;
  background: transparent;
  backdrop-filter: blur(10px);
  box-shadow: 8px 8px 10px black;
  border: 1px solid gray;
  border-radius: 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateX(4px) scale(1.05);

    svg {
      color: #fa1db2;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    margin: 0;
    font-size: clamp(0.9rem, 2vw, 1rem);
    letter-spacing: 1px;
    font-weight: 400;
  }
`;

export const ErrorInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  h2 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;
