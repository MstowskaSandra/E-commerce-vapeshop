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
  height: 70vh;
  gap: 2rem;
  letter-spacing: 1px;
  padding: 6rem 2rem;
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
  background-color: #1e1e20;
  min-height: 25vh;
`;

export const AdvantagesContainer = styled.div`
  display: flex;
  justify-content: space-around;

  :last-child {
    border: none;
  }
`;

export const AdvantagesItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;

  border-right: 3px solid #fa1db2;
`;

export const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: flex-start;
  max-width: 50%;

  :first-child {
    font-size: large;
    font-weight: bold;
    letter-spacing: 1px;
  }

  :last-child {
    font-size: medium;
    font-weight: 400;
  }
`;

export const CategoriesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  backdrop-filter: blur(10px);
  width: 100%;
  height: 75vh;
  min-height: min-content;
  padding-top: 5rem 2rem;
  border-top: 1px solid black;

  h2 {
    font-size: 3rem;
    letter-spacing: 2px;
    font-weight: 400;
    padding: 1rem;
    margin-top: 2rem;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const CategorieItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 75%;
  background: linear-gradient(
    135deg,
    #233fd3 0%,
    #4a2cbf 35%,
    #8a1fa8 65%,
    #e00088 100%
  );
  border-radius: 16px;
  padding: 1rem;
  margin: 0;

  &:hover {
    transform: scale(1.08);
    transition: all 0.3s ease-in-out;
  }

  p {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
  }

  img {
    height: 75%;
  }

  button {
    align-self: start;
    border: 1px solid white;
    padding: 0.25rem 0.5rem;

    &:hover {
      transform: translateX(4px);
      transition: all 0.2s ease-in-out;
      box-shadow: 8px 8px 10px black;
    }
  }
`;

export const NoSmokingSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: transparent;
  backdrop-filter: blur(10px);
`;

export const Header = styled.div`
  text-align: center;
  margin-top: 4rem;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 90%;
  padding: 2rem;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: center;
  width: 30vw;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: flex-end;
  align-items: center;
  width: 30vw;
`;

export const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 30vw;
`;

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100% 0% 100% 0% / 84% 0% 100% 16%;
  background: linear-gradient(
    135deg,
    #233fd3 0%,
    #4a2cbf 35%,
    #8a1fa8 65%,
    #e00088 100%
  );

  img {
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1) rotate(-15deg);
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const ReasonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 65%;
  background-color: #231b26;
  box-shadow: 8px 8px 10px black;
  border-radius: 16px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const ReasonTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  width: 50%;
  padding-top: 1rem;
  overflow-wrap: break-word;
  word-break: break-word;

  :first-child {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  :last-child {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export const BrandsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 100%;
  background-color: #1e1e20;
  min-height: 24vh;
  gap: 1rem;

  h3 {
    margin: 0 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

export const Brands = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BrandLogo = styled.div`
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: white;
  }
`;

export const ShopSection = styled.section`
  background: transparent;
  backdrop-filter: blur(10px);
  width: 100%;
  min-height: 75vh;
  padding-top: 5rem;

  h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 1px;
    padding-bottom: 3rem;
  }
`;

export const Shop = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 3rem;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 20rem;
    height: 15rem;
  }
`;

export const ShopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 0.25rem;
  overflow-wrap: break-word;
  word-break: break-word;
  min-width: 15rem;
  padding: 1rem;
  background-color: #231b26;
  box-shadow: 8px 8px 10px black;
  border-radius: 16px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  p {
    margin-bottom: 0;
  }
`;

export const ShopTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
  background-color: #231b26;
  box-shadow: 8px 8px 10px black;
  border-radius: 16px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  p {
    margin: 0;
  }
`;

export const MapBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border: 2px solid gray;
  align-self: center;
  margin-top: 1rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 8px 8px 10px black;
  }
`;
 

