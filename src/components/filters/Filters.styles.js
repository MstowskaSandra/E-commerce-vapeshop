import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: end;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border-left: 4px solid #fa1db2;
  border-right: 4px solid #fa1db2;
  box-shadow: 8px 8px 12px black;
  max-width: 1200px;

  @media (max-width: 768px) {
    max-width: 650px;
    flex-direction: column;
    align-items: stretch;
    padding: 1.5rem;
  }
`;

export const Select = styled.select`
  flex: 1;
  min-width: 11.25rem;
  padding: 0.75rem 2.5rem 0.75rem 1rem;

  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: white;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, #fa1db2 50%),
    linear-gradient(135deg, #fa1db2 50%, transparent 50%);
  background-position:
    calc(100% - 1.25rem) calc(50% - 2px),
    calc(100% - 1rem) calc(50% - 2px);
  background-size: 6px 6px;
  background-repeat: no-repeat;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(250, 29, 178, 0.45);
  }

  &:focus-visible {
    outline: none;
    transform: translateY(-2px);
    border-color: #fa1db2;

    box-shadow:
      0 0 0 3px rgba(250, 29, 178, 0.25),
      0 0 18px rgba(250, 29, 178, 0.45);
  }

  option {
    background: #141414;
    color: white;
  }
`;


export const PriceRange = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    min-width: 12.5rem;
    flex-shrink: 0;

    @media (max-width: 768px) {
      justify-content: space-between;
    }
`;

export const PriceInput = styled.input`
    flex: 1;
    padding: 0.75rem 0.25rem ;
    width: 5rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    color: white;
    font-size: 0.95rem;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;    
    margin: 0;
  }

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
      outline: none;
      border-color: #fa1db2;
      box-shadow: 0 0 0 3px rgba(250, 29, 178, 0.2);
    }

    &:hover {
      border-color: rgba(250, 29, 178, 0.4);
      background: rgba(255, 255, 255, 0.2);
    }
`;

export const SearchInput = styled.input`
    flex: 2;
    min-width: 15.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    color: white;
    font-size: 1rem;
    letter-spacing: 0.5px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
      outline: none;
      border-color: #fa1db2;
      box-shadow: 0 0 0 3px rgba(250, 29, 178, 0.2);
      transform: translateY(-2px);
    }

    &:hover {
      border-color: rgba(250, 29, 178, 0.4);
      background: rgba(255, 255, 255, 0.2);
    }
`;

export const Separator = styled.span`
    font-weight: 700;
    color: #fa1db2;
    font-size: 1.2rem;
    padding: 0 0.25rem;
`;

export const Currency = styled.span`
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
`;
