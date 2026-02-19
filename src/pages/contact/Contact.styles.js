import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Contact = styled.section`
  width: 100%;
  padding: 4rem 0 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleSection = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 4rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;

  h1 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 600;
    margin: 0;
  }

  p {
    max-width: 600px;
    font-family: "Barlow", sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
  }
`;

export const ShopsSection = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr;
  }
`;

export const Shop = styled.div`
  background-color: #231b26;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 1.5rem;
  }

  p {
    font-family: "Barlow", sans-serif;
    font-size: 1.05rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin: 0;
  }

  iframe {
    margin-top: 2rem;
    justify-self: center;
    align-self: center;
  }
`;

export const ShopTime = styled.div`
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  p:first-of-type {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;

export const SocialMediaSection = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    max-width: 600px;
    font-family: "Barlow", sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
  }
`;

export const MediaWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0;
  }

  img {
    width: 220px;
    max-width: 100%;
    padding: 1rem;
    background: white;
    border-radius: 16px;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);

    &:hover {
      transform: scale(1.05);
    }
  }
`;
