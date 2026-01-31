import styled from "styled-components";

export const Home = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
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
  margin-bottom: 3rem;

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
  background-color: #1e1e20;
  height: 25vh;
  /* border-radius: 20px; */
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
  justify-content: center;
  align-items: center;

  /* justify-content: space-around;
  gap: 2rem;
  height: 100%;
  width: 80%; */
  gap: 1rem;
`;

export const CategorieItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 12rem;
  background: linear-gradient(
    135deg,
    #233fd3 0%,
    #4a2cbf 35%,
    #8a1fa8 65%,
    #e00088 100%
  );
  border: none;
  border-radius: 16px;
  padding: 2rem;

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
