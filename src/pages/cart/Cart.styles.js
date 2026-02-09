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
  padding: 2rem;
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
  border: 1px solid gray;
`;

export const ShopingBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Barlow", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  align-self: flex-start;
  padding-left: 5rem;
  padding-top: 0;

  &:hover {
    color: #fa1db2;
    transform: scale(1.1);
    font-weight: 600;
  }
`;

export const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CartTotal = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  p {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: white;
  }
`;

export const TotalBtn = styled.button`
  color: white;
  animation: floatDown 2s ease-in-out infinite;

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
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 60%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 24px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  padding: 2rem 2rem;
  margin-bottom: 3rem;

  h1 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 3.125rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding-bottom: 2rem;
  }

  img {
    border-radius: 50%;
    width: 20rem;
    height: 20rem;
    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 1px;
    padding-top: 2rem;

    a {
      color: #fa1db2;

      &:hover {
        color: blueviolet;
      }
    }
  }
`;
