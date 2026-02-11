import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const CartItemLi = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 8px 8px 10px black;
  gap: 1rem;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 16px;
    border: 1px solid gray;
    box-shadow: 8px 8px 10px black;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 7rem;
      height: 7rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 5.5rem;
      height: 5.5rem;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 95%;
    padding: 0.75rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;

  h3 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    font-weight: 600;
    text-align: center;
    padding-bottom: 0.75rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: clamp(0.9rem, 1vw, 1rem);
  font-weight: 600;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const QuantityBtn = styled.button`
  margin: 0;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  transition: transform 0.2s ease;

  &:hover {
    background: rgba(250, 29, 178, 0.15);
    color: #fa1db2;
    border-color: #fa1db2;
    transform: translateY(-1px) scale(1.03);
    box-shadow:
      0 8px 18px rgba(0, 0, 0, 0.35),
      0 0 18px rgba(250, 29, 178, 0.55),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.2rem 0.5rem;
  }
`;

export const Total = styled.div`
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: clamp(1rem, 1vw, 1.2rem);
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
`;

export const RemoveBtn = styled.button`
  margin-top: 0.75rem;
  padding: 0.4rem 1rem;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: clamp(0.75rem, 0.8vw, 0.8rem);
  font-weight: 500;
  letter-spacing: 0.75px;
  color: white;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 8px 8px 10px black;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(250, 29, 178, 0.15);
    color: white;
    border-color: #fa1db2;
    transform: scale(1.1);
    box-shadow:
      0 8px 18px rgba(0, 0, 0, 0.35),
      0 0 18px rgba(250, 29, 178, 0.55),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
`;
