import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const CartSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;

  h1 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: clamp(2rem, 3vw, 3.125rem);
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    padding: 2rem 0;
  }
`;

export const CartContainer = styled.div`
  width: 60%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;

  @media (max-width: ${breakpoints.laptop}) {
    width: 80%;
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 95%;
    padding: 1rem;
  }
`;

export const ShopingBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Barlow", sans-serif;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  align-self: flex-start;
  padding-left: 5rem;
  background: none;
  border: none;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    color: #fa1db2;
    transform: scale(1.1);
    font-weight: 600;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-left: 1rem;
    font-size: clamp(0.6rem, 1.5vw, 0.7rem);
    justify-content: center;
  }
`;

export const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const CartTotal = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  p {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: clamp(1.2rem, 2vw, 2rem);
    font-weight: 500;
    color: white;
    letter-spacing: 1px;
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TotalBtn = styled.button`
  color: white;
  animation: floatDown 2s ease-in-out infinite;
  background: none;
  border: none;

  @keyframes floatDown {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  svg {
    &:hover {
      color: #fa1db2;
      transform: scale(1.2);
    }
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin-bottom: 3rem;

  h1 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: clamp(2rem, 4vw, 3.125rem);
    font-weight: 600;
    letter-spacing: 1px;
    padding-bottom: 2rem;
    text-align: center;
  }

  img {
    border-radius: 50%;
    width: clamp(12rem, 20vw, 20rem);
    height: clamp(12rem, 20vw, 20rem);
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 400;
    letter-spacing: 1px;
    padding-top: 2rem;
    text-align: center;

    a {
      color: #fa1db2;

      &:hover {
        color: blueviolet;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 95%;
    padding: 1rem;
  }
`;

