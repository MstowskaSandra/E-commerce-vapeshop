import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const ProductSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: clamp(0.8rem, 2vw, 1.2rem);
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  backdrop-filter: blur(10px);
  box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid #ccc;
  border-radius: 16px;

  &::before {
    content: "";
    width: 100%;
    aspect-ratio: 1 / 1;
    display: block;
    margin-bottom: 1rem;
    background: #e0e0e0;
    border-radius: 16px;
    animation: ${shimmer} 1.5s infinite;
  }

  &::after {
    content: "";
    height: clamp(0.85rem, 1vw, 1.1rem);
    width: 60%;
    background: #e0e0e0;
    border-radius: 4px;
    align-self: flex-end;
    animation: ${shimmer} 1.5s infinite 0.2s;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 2rem auto 0;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
