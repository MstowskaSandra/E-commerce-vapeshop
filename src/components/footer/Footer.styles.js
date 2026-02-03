import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
  background-color: #231b26;
  /* min-height: 10vh; */
`;

export const FooterContainer = styled.div`
    display: flex;
    border-bottom: 1px solid gray;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;


    p {
        padding: 1rem 0;
    }
`;

export const ContentWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;

    p {
        font-family: "Barlow Semi Condensed", sans-serif;
        font-size: 1rem;
        font-weight: 500;
    }
`;

export const MediaIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: top;

    p {
        margin: 0;
        padding-bottom: 0.5rem;
        font-family: "Barlow Semi Condensed", sans-serif;
        font-size: 1rem;
        font-weight: 500;
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const PaymentItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-family: "Barlow Semi Condensed", sans-serif;
        font-size: 1rem;
        font-weight: 500;
    }
`;

export const FooterItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;