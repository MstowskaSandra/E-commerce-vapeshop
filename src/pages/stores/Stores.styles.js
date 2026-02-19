import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Stores = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  h1 {
    padding-bottom: 2rem;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 3.125rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 1px solid green;
  }
`;

export const StorySection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 75vh;
  padding: 5rem 0;
  background: transparent;
  backdrop-filter: blur(20px);
  border: 1px solid gray;
  box-shadow: 8px 8px 10px black;
  border-radius: 20px;
  margin: 5rem 0;

  @media (max-width: ${breakpoints.mobile}) {
    width: 85%;
  }
`;

export const StoryTxt = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;

  h3 {
    text-align: center;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 3.125rem;
    margin: 0;
  }

  h4 {
    text-align: center;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(236, 47, 75);
  }

  @media (max-width: ${breakpoints.mobile}) {
    h3 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    h3 {
      font-size: 2.8rem;
    }
  }
`;

const fadeUp = keyframes`
    0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateY(-5px) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const ParWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  gap: 1rem;

  p,
  div {
    opacity: 0;
    transform: translateY(10px);
    animation: ${fadeUp} both;
    animation-timeline: view(20% 10%);
  }

  p:nth-of-type(1) {
    animation-range: entry 20% cover 40%;
  }
  div:nth-of-type(1) {
    animation-range: entry 40% cover 60%;
  }
  p:nth-of-type(2) {
    animation-range: entry 60% cover 80%;
  }

  p {
    text-align: center;
    font-family: "Barlow", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  span {
    text-align: center;
    margin-bottom: 0;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(236, 47, 75);
  }

  @media (max-width: ${breakpoints.mobile}) {
    p {
      font-size: 0.9rem;
    }
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #231b26;
  min-height: 25vh;
  padding: 4rem 0;

  h2 {
    text-align: center;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 3.125rem;
    padding-bottom: 3rem;
  }
`;

export const Workers = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 80%;
  flex-wrap: wrap;
`;

export const Worker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 13.75rem;
  background: linear-gradient(
    90deg,
    #ff6adf 0%,
    #b56cff 35%,
    #5fd3ff 70%,
    #45f3e5 100%
  );
  box-shadow: 8px 8px 10px black;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  margin: 0;

  img {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid white;
  }

  h4 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.03em;
  }

  p:first-of-type {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  p:last-of-type {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 400;
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
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
  width: 100%;
  min-height: 75vh;
  padding: 8rem 0;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(236, 47, 75);
    text-align: center;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
  }
`;