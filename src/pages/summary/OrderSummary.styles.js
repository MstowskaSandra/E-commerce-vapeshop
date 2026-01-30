import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  padding: 3rem 2rem;
  margin: 0 auto;
  background: transparent;
  border: 1px solid gray;
  backdrop-filter: blur(20px);
  box-shadow: 8px 8px 12px black;
  border-radius: 16px;

  h2 {
    text-align: center;
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
    width: 100%;
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: flex-start;
`;

export const ClientData = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border-left: 4px solid #fa1db2;
  border-right: 4px solid #fa1db2;

  p {
    margin: 0;
    font-size: large;
    line-height: 1.5;

    &:first-of-type {
      font-weight: 600;
    }
  }

  h3 {
    font-size: x-large;
    margin-bottom: 0.5rem;
  }
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border-left: 4px solid #fa1db2;
  border-right: 4px solid #fa1db2;
  font-weight: 500;
  letter-spacing: 1px;

  h3 {
    font-size: x-large;
    margin-bottom: 0.5rem;
  }
`;

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border-left: 4px solid #fa1db2;
  border-right: 4px solid #fa1db2;
  align-self: flex-start;

  h3 {
    font-size: x-large;
    margin: 0 0 0.5rem 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0.5rem 0;
      border-bottom: 1px solid gray;

      &:first-child {
        border-top: 1px solid gray;
      }

      p {
        margin: 0.25rem 0;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 1.1;
      }
    }
  }
`;

export const Total = styled.p`
  text-align: left;
  font-size: large;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  border-left: 4px solid #fa1db2;
  border-right: 4px solid #fa1db2;
  padding: 1.5rem;
  margin: 0;
  align-self: flex-start;
`;

export const Button = styled.button`
  width: 25%;
  border-radius: 20px;
  border: 3px solid black;
  box-shadow: 10px 10px 15px black;
  background-color: whitesmoke;
  color: black;
  padding: 1rem 2rem;
  font-size: large;

  &:hover {
    border-color: #fa1db2aa;
    transform: translateX(4px);
    transition: all 0.2s ease-in-out;
    box-shadow: 8px 8px 12px #fa1db2aa;
  }

  @media (max-width: 768px) {
    font-size: medium;
    font-weight: 500;
    width: 55%;
  }
`;
