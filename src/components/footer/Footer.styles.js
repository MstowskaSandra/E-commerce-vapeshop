import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #231b26;
  border-top: 1px solid gray;
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

export const FooterItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const FooterLink = styled(Link)`
  border: none;
  width: max-content;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: scale(1.05);
    color: #fa1db2;
  }
`;

export const Copyright = styled.p`
  display: flex;
  align-self: center;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 1rem;
  margin: 0;
`;

export const MediaIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: top;
  padding: 0.5rem 0;

  p {
    margin: 0;
    padding-bottom: 0.5rem;
    font-family: "Barlow", sans-serif;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    cursor: pointer;
    transition:
      transform 0.2s ease,
      color 0.2s ease;

    &:hover {
      transform: scale(1.2);
      color: #fa1db2;
    }
  }
`;

export const IconLink = styled.a`
  display: inline-flex;
  color: inherit;
  cursor: pointer;

  &:hover svg {
    transform: scale(1.2);
    color: #fa1db2;
  }
`;

