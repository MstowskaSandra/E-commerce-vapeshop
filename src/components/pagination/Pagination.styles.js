import styled from "styled-components";


export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 0;
`;

export const NavButton = styled.button`

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const PageButton = styled.button`
  padding: 0.5rem 0.75rem;
  min-width: 2.25rem;
  border-radius: 6px;
  border: none;

  background: ${({ isActive }) =>
    isActive ? "#fa1db2" : "#eee"};
  color: ${({ isActive }) =>
    isActive ? "#fff" : "#222"};

  font-weight: ${({ isActive }) =>
    isActive ? "600" : "400"};

  &:hover {
    background: ${({ isActive }) =>
      isActive ? "#fa1db2" : "#ddd"};
  }

  &:disabled {
    cursor: default;
  }
`;
