import styled from "styled-components";

export const SummaryContainer = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: auto 1fr auto;  
  gap: 2rem;
  width: 100%;
  max-width: 1000px;  
  padding: 3rem 2rem;
  margin: 0 auto;

  background: transparent;
    backdrop-filter: blur(10px);
    box-shadow: 8px 8px 12px black;
    border-radius: 16px;

  h2 {
    grid-column: 1 / -1; 
    text-align: center;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    margin: 0 0 0.5rem 0;
    color: #fa1db2;
  }
`;

export const ClientData = styled.section`
grid-column: 1;
 display: flex;
  flex-direction: column;
  height: max-content;
  gap: 0.75rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border-left: 4px solid #fa1db2;
  border-right: 4px solid #fa1db2;
  
  p {
    margin: 0;
    font-size: large;
    line-height: 1.5;
    
    &:first-of-type { font-weight: 600; }
  }

  h3 {
    font-size: x-large;
    margin-bottom: 3rem;
  }
 
`;

export const InfoSection= styled.section`
    grid-column: 1;
 display: flex;
 flex-direction: column;
 gap: 1rem;
 height: max-content;
 padding: 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border-left: 4px solid #fa1db2;
  border-right: 4px solid #fa1db2;
`;

export const ProductsSection = styled.section`
grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
   
    padding: 1rem 0 0 0;

    h3 {
    margin-left: 1rem;
  }
  
  ul {
    list-style: none; 
    padding: 0.25rem;
    
   li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0.5rem 0;
      border-bottom: 1px solid gray;
      margin: 0;

      &:first-child {
        border-top: 1px solid gray;
      }

      p {
        margin: 0.25rem 0;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 1.1;
      }
   }
  }

   
`;

export const Total = styled.p`
grid-column: 2;
  text-align: left;
    font-size: large;
    font-weight: 500;
    
    background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  border-left: 4px solid #fa1db2;
  border-right: 4px solid #fa1db2;
    padding: 1rem;
    border-radius: 12px;
    margin: 0;
`;

export const Button = styled.button`
grid-column: 1 / -1;  
  border-radius: 20px;
  border: 3px solid black;
  box-shadow: 10px 10px 15px black;
  background-color: whitesmoke;
  color: black;

  &:hover {
    border-color: #fa1db2aa;
    transform: translateX(4px);
    transition: all 0.2s ease-in-out;
    box-shadow: 8px 8px 12px #fa1db2aa;
  }

  &:disabled {
    cursor: no-drop;
  }
`;