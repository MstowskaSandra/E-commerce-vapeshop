import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

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
