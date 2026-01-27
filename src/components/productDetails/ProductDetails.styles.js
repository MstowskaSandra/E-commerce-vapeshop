import styled from "styled-components";

export const ProductDetails = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    background: transparent;
    backdrop-filter: blur(10px);
    box-shadow: 8px 8px 12px black;
    border: 1px solid gray;
    border-radius: 16px;
`;

export const ProductImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 75%;
        max-width: 500px;
        height: auto;
        border-radius: 16px;
        box-shadow: 10px 10px 15px black;
       
        transition: all 0.3s ease;
        object-fit: cover;
        border: 1px solid gray;

        &:hover {
            transform: scale(1.05);
            border: 3px solid #fa1db2aa;
        }
    }
`;

export const ProductInfo = styled.div`
display: flex;
padding: 3rem;
flex-direction: column;
gap: 1rem;
border-radius: 16px;
/* background: transparent;
backdrop-filter: blur(10px); */
`;