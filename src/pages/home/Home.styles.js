import styled from "styled-components";

export const Home = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 2rem;
  letter-spacing: 1px;
  padding: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 2px;
  }

  p {
    font-size: 2em;
    text-align: center;
    font-weight: 500;
  }
`;

export const AdvantagesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  background-color: #231b26;
  height: 25vh;
  border-radius: 20px;
`;

export const AdvantagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`;

export const AdvantagesItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-right: 1px solid gray;
  padding: 2rem;

  &:last-child {
    border: none;
  }

  span {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
  }
`;

export const CategoriesSection = styled.section`
  background: transparent;
  width: 100%;
  height: 40vh;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  height: 90%;
  width: 90%;
`;

export const CategoriesItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
  }

  img {
    height: 12rem;
    width: 12rem;
  }
`;
