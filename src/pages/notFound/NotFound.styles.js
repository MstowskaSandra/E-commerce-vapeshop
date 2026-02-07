import styled from "styled-components";

export const NotFound = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 3rem 0;

h2 {
    text-align: center;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 3.125rem;
    padding-bottom: 3rem;
}

img {
    border-radius: 50%;
    width: 20rem;
    height: 20rem;
    border: 1px solid gray;
    box-shadow: 8px 8px 10px black;
}
`;

export const NotFoundBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    border: 3px solid #ff6adf;
    border-radius: 16px;
    margin: 3rem 0;
`;

