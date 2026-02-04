import styled from "styled-components";

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

  img {
    width: 30%;
    border-radius: 16px;
    border: 1px solid gray;
    box-shadow: 8px 8px 10px black;
  }
`;

export const Content = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
    padding-bottom: 1rem;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
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
`;

export const Total = styled.div`
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
`;

export const RemoveBtn = styled.button`
  margin-top: 0.75rem;
  padding: 0.4rem 1rem;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.75px;
  color: white;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 4px 10px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transition:
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background 200ms ease,
    color 200ms ease,
    border-color 200ms ease;

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
`;