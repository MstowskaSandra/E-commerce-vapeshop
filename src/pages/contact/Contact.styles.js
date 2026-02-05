import styled from "styled-components";

export const Contact = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4rem 0;
    width: 100%;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 1rem;
  letter-spacing: 1px;
  padding: 4rem 0;
  text-transform: uppercase;

 h1 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 4rem;
    font-weight: 600;
  }

  p {
    width: 55%;
    font-family: "Barlow", sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
  }
`;

export const ShopsSection = styled.section`
    display: flex;
    width: 80%;
    justify-content: space-around;
    padding: 4rem 0;
`;


export const Shop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    border: 1px solid gray;
  
    background: linear-gradient(
        90deg,
        #ff6adf 0%,
        #b56cff 35%,
        #5fd3ff 70%,
        #45f3e5 100%
    );
    box-shadow: 8px 8px 10px black;
    border-radius: 16px;
    transition: all 0.3s ease;
    padding: 1rem;
    margin: 0;

    &:hover {
        transform: scale(1.1);
    }

    h2 {
        text-align: center;
        text-transform: uppercase;
        font-family: "Barlow Semi Condensed", sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 1px;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid white;
       
    }

    p {
        margin: 0;
        font-family: "Barlow", sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 1px;
    }
`;

export const SocialMediaSection = styled.section`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 6rem 0 4rem 0;

    h2 {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  p {
    width: 55%;
    font-family: "Barlow", sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
  }
`;

export const MediaWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 3rem 0;
`;

export const Media = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;

    img {
        width: 50%;
        padding: 1rem;
        background: white;
        transition: all 0.3s ease;
        box-shadow: 8px 8px 10px black;
        border-radius: 16px;

        &:hover {
            transform: scale(1.1);
        }
    }

    p {
        font-family: "Barlow Semi Condensed", sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
        text-align: center;
        margin-bottom: 0.5rem;
        letter-spacing: 1px;
    }
`;
