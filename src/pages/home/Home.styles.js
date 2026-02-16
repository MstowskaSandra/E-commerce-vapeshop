import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Home = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
  min-height: 80vh;
  padding: 6rem 1rem;
  text-align: center;

  h1 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 2.4rem;
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

  p {
    max-width: 40rem;
    font-family: "Barlow", sans-serif;
    font-size: 1.4rem;
    line-height: 1.6;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 8rem 3rem;

    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.8rem;
    }
  }

  @media (min-width: ${breakpoints.laptop}) {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.4rem;
    }
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
`;

export const ArrowWrapper = styled.div`
  margin-top: 2rem;
  animation: floatDown 3s ease-in-out infinite;
  opacity: 0.7;

  svg {
    width: 32px;
    height: 32px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    svg {
      width: 48px;
      height: 48px;
    }
  }

  @keyframes floatDown {
    0% {
      transform: translateY(0);
      opacity: 0.6;
    }
    50% {
      transform: translateY(15px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 0.6;
    }
  }
`;

export const AdvantagesSection = styled.section`
  width: 100%;
  background-color: #231b26;
  padding: 3rem 1.5rem;
`;

export const AdvantagesContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const AdvantagesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem;

  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  box-shadow: 8px 8px 10px black;

  animation: fadeUp both;
  animation-timeline: view(10% 5%);

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  svg {
    flex-shrink: 0;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: ${breakpoints.laptop}) {
    border-right: 3px solid #fa1db2;
    gap: 2rem;
  }
`;

export const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  p:first-child {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  p:last-child {
    font-size: 0.9rem;
    opacity: 0.85;
    line-height: 1.4;
  }

  @media (min-width: ${breakpoints.tablet}) {
    p:first-child {
      font-size: 1.1rem;
    }

    p:last-child {
      font-size: 1rem;
    }
  }
`;

export const AskSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8rem 1.5rem;
  background: transparent;
  backdrop-filter: blur(10px);
`;

export const AskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 8px 8px 10px black;
  }

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;

    img {
      width: 50%;
    }
  }
`;

export const AskTxt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  padding: 0;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(236, 47, 75);
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
    text-align: left;

    h3 {
      font-size: 3rem;
    }

    h4 {
      font-size: 1.1rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

export const CategoriesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 4rem 1.5rem;
  background-color: #231b26;

  h2 {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 2rem;
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

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 2.5rem;
    }

    @media (min-width: ${breakpoints.laptop}) {
      font-size: 3.125rem;
    }
  }
`;

export const CategoriesContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  justify-items: center;

  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CategorieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    90deg,
    #ff6adf 0%,
    #b56cff 35%,
    #5fd3ff 70%,
    #45f3e5 100%
  );
  box-shadow: 8px 8px 10px black;
  border-radius: 16px;
  padding: 1rem;
  width: 90%;
  max-width: 17.5rem;
  transition: transform 0.3s ease-in-out;

  animation: fadeUpOpacity both;
  animation-timeline: view(10% 5%);

  &:hover {
    transform: scale(1.05);
  }

  @keyframes fadeUpOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h4 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.5rem;

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1.1rem;
    }

    @media (min-width: ${breakpoints.laptop}) {
      font-size: 1.2rem;
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
    animation: imageReveal both;
    animation-timeline: view(40% 10%);
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid gray;
    border-radius: 8px;
    box-shadow: 8px 8px 12px black;
    background: transparent;
    cursor: pointer;

    &:hover {
      border-color: black;
      transform: translateX(4px);
      box-shadow: 4px 4px 6px black;
      transition: all 0.2s ease-in-out;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
    max-width: 260px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 100%;
    max-width: none;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const NoSmokingSection = styled.section`
  width: 100%;
  padding: 4rem 1.5rem;
  background: transparent;
  backdrop-filter: blur(10px);
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeUp both;
  animation-timeline: view(10% 5%);

  h2 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 2rem;

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 2.5rem;
    }

    @media (min-width: ${breakpoints.laptop}) {
      font-size: 3.125rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    width: 25%;
    align-items: flex-start;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    width: 25%;
    align-items: flex-end;
  }
`;

export const MiddleContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;

  @media (min-width: ${breakpoints.laptop}) {
    width: 50%;
    min-height: 30rem;
    margin: 0;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 40%;
    min-height: 20rem;
    margin: 0;
  }
`;

export const BackgroundImg = styled.div`
  width: 100%;
  max-width: 25rem;
  border-radius: 100% 0% 100% 0% / 84% 0% 100% 16%;
  background: linear-gradient(
    135deg,
    #233fd3 0%,
    #4a2cbf 35%,
    #8a1fa8 65%,
    #e00088 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1) rotate(-15deg);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      &:hover {
        transform: rotate(-15deg);
      }
    }
  }
`;

export const ReasonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 18.75rem;
  background-color: #231b26;
  box-shadow: 8px 8px 10px black;
  border-radius: 16px;
  padding: 0.75rem 1rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    flex-shrink: 0;
  }
`;

export const ReasonTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1rem;
  gap: 1rem;
  width: 50%;

  p:first-child {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 0.25rem;
  }

  p:last-child {
    font-size: 0.85rem;
    font-weight: 400;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 60%;
    p:first-child {
      font-size: 1rem;
      word-break: break-word;
      hyphens: auto;
    }
    p:last-child {
      font-size: 0.75rem;
    }
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 60%;
    p:first-child {
      font-size: 1.15rem;
    }
    p:last-child {
      font-size: 1rem;
    }
  }
`;

export const BrandsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #231b26;
  padding: 2rem 1rem;
  gap: 1rem;
`;

export const Brands = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: ${breakpoints.laptop}) {
    gap: 3rem;
  }
`;

export const BrandLogo = styled.div`
  flex: 0 0 6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: white;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    @media (min-width: ${breakpoints.laptop}) {
      width: 6rem;
      height: 6rem;
    }
  }
`;

export const ShopSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background: transparent;
  backdrop-filter: blur(10px);
  width: 100%;
  min-height: 75vh;
  padding: 8rem 0;

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
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 1rem;
  margin-bottom: 1rem;

  iframe {
    box-shadow: 8px 8px 10px black;
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
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    iframe {
      width: 80%;
      max-width: 100%;
    }
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
  animation: fadeUp both;
  animation-timeline: view(20% 10%);

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  p {
    margin-bottom: 0;
  }

  h3 {
    text-align: center;
  }

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

export const ShopTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 1rem;
  min-width: 10rem;
  padding: 1rem;
  background-color: #231b26;
  box-shadow: 8px 8px 10px black;
  border-radius: 16px;
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

export const PhotoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  background-color: #231b26;
`;

export const Group = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  width: 15rem;

  animation: fadeUp both;
  animation-timeline: smooth view(20% 10%);

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
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
    border: 1px solid gray;
    box-shadow: 8px 8px 10px black;

    &:hover {
      transform: scale(1.2);
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 20rem;
    img {
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export const ReviewsSection = styled.section`
  background: transparent;
  backdrop-filter: blur(10px);
  width: 100%;
  min-height: 75vh;
  padding: 8rem 0;
`;
