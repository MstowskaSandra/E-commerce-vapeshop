import styled from "styled-components";


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
    font-size: 3.125rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    padding: 2rem 0;
  }
`;

export const CartContainer = styled.div`
  padding: 1rem 2rem;
  width: 60%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 24px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CartTotal = styled.div`
  border: 1px solid blue;
`;

