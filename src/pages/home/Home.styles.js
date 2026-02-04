import styled from "styled-components";
import { ArrowDown } from "lucide-react";

export const Home = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 3rem 0 0 0; */
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
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 4rem;
    font-weight: 600;
    text-transform: uppercase;
    background: linear-gradient(
      90deg,
      #ff6adf 0%,
      #b56cff 35%,
      #5fd3ff 70%,
      #45f3e5 100%
    );
    -webkit-background-clip: text;
    color: transparent;
    background-size: 200% auto;
    animation: gradientMove 6s ease infinite;
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  p {
    width: 55%;
    font-family: "Barlow", sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
  }
`;

export const AnimatedArrow = styled(ArrowDown)`
  animation: floatDown 2s ease-in-out infinite;
  opacity: 0.7;

  @keyframes floatDown {
    0% {
      transform: translateY(0);
      opacity: 0.6;
    }
    50% {
      transform: translateY(10px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 0.6;
    }
  }
`;

export const AdvantagesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #231b26;
  min-height: 25vh;
`;

export const AdvantagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  animation: fadeUp both;
  animation-timeline: view(20% 10%);

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

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

export const AskSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 75vh;
  padding: 5rem 0;
  background: transparent;
  backdrop-filter: blur(10px);
`;

export const AskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  padding: 5rem 0;

  img {
    width: 50%;
    border-radius: 20px;
  }
`;

export const AskTxt = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 3rem;
  gap: 1rem;

  p {
    text-align: left;
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.1rem;
  }

  h3 {
    text-align: left;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 3.125rem;
  }

  h4 {
    text-align: left;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(236, 47, 75);
  }
`;

export const CategoriesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: transparent;
  backdrop-filter: blur(10px);
  width: 100%;
  min-height: 75vh;
  padding: 8rem 0;

  h2 {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 3.125rem;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-weight: 600;
    background: linear-gradient(
      90deg,
      #ff6adf 0%,
      #b56cff 35%,
      #5fd3ff 70%,
      #45f3e5 100%
    );
    -webkit-background-clip: text;
    color: transparent;
    background-size: 200% auto;
    animation: gradientMove 6s ease infinite;

    @keyframes gradientMove {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  animation: fadeUp both;
  animation-timeline: view(10% 5%);

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const CategorieItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 75%;

  background-color: #231b26;
  box-shadow: 8px 8px 10px black;
  border-radius: 16px;

  padding: 1rem;
  margin: 0;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  h4 {
    text-align: center;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  img {
    height: 80%;
    animation: imageReveal both;
    animation-timeline: view(40% 10%);

    @keyframes imageReveal {
      from {
        filter: saturate(0) contain-intrinsic-width(4) brightness(0.1)
          border-top-left-radius(5px);
        opacity: 0;
        scale: 0.95;
        translate: 0 4rem;
      }
      to {
        filter: none;
        opacity: 1;
        scale: 1;
        translate: 0 0;
      }
    }
  }

  button {
    align-self: start;
    padding: 0.25rem 0.5rem;
    justify-self: center;
    border: 2px solid gray;
    box-shadow: 8px 8px 12px black;

    &:hover {
      border-color: #fa1db2aa;
      transform: translateX(4px);
      transition: all 0.2s ease-in-out;
      box-shadow: 4px 4px 6px #fa1db2aa;
    }
  }
`;

export const NoSmokingSection = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 10rem;
  background: transparent;
  backdrop-filter: blur(10px);
`;

export const Header = styled.div`
  text-align: center;
  margin-top: 4rem;
  animation: fadeUp both;
  animation-timeline: view(10% 5%);

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  h2 {
    text-align: center;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 3.125rem;
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
  background-color: #231b26;
  min-height: 24vh;
  gap: 1rem;
`;

export const Brands = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  animation: fadeUp both;
  animation-timeline: view(20% 10%);

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const BrandLogo = styled.div`
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: white;

    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const ShopSection = styled.section`
  background: transparent;
  backdrop-filter: blur(10px);
  width: 100%;
  min-height: 75vh;
  padding-top: 8rem;

  h2 {
    padding-bottom: 2rem;
    text-align: center;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    background: linear-gradient(
      90deg,
      #ff6adf 0%,
      #b56cff 35%,
      #5fd3ff 70%,
      #45f3e5 100%
    );
    -webkit-background-clip: text;
    color: transparent;
    background-size: 200% auto;
    animation: gradientMove 6s ease infinite;

    @keyframes gradientMove {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;

export const Shop = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 3rem;
  align-items: center;
  margin-bottom: 1rem;
  animation: fadeUp both;
  animation-timeline: view(20% 10%);

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

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

export const ReviewsSection = styled.section`
  background: transparent;
  backdrop-filter: blur(10px);
  width: 100%;
  min-height: 75vh;
  padding: 8rem 0;
`;

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(236, 47, 75);
  }

  h3 {
    padding: 0 0 0 2rem;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 3.125rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;