import styled from "styled-components";

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
  width: 75%;
  min-height: 75vh;
  padding: 5rem 0;
  background: transparent;
  backdrop-filter: blur(20px);
  border: 1px solid gray;
  box-shadow: 8px 8px 10px black;
  border-radius: 20px;
  margin-bottom: 5rem;
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
`;

export const ParWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  gap: 1rem;

  p {
    text-align: left;
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

export const TeamSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #231b26;
  min-height: 25vh;
  padding: 4rem 0;
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