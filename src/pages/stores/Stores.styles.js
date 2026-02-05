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
  justify-content: space-around;
  width: 75%;
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

export const Worker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 20%;
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
  margin: 0;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

