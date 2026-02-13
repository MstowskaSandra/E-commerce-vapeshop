import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const overlayStyles = css`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Overlay = styled.div`
  ${overlayStyles}
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.85),
    rgba(0, 0, 0, 0.95)
  );
  backdrop-filter: blur(6px);
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  background: linear-gradient(145deg, #111, #1a1a1a);
  width: 100%;
  max-width: 400px;
  border-radius: 1.5rem;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #f5f5f5;
  text-align: center;
  box-shadow:
    0 0 2rem rgba(250, 29, 178, 0.25),
    0 2rem 4rem rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(250, 29, 178, 0.2);
  font-family: "Barlow Semi Condensed", sans-serif;
  animation: ${fadeIn} 0.3s ease forwards;
`;

export const Icon = styled.div`
  font-size: 4rem;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  line-height: 1.4;
  background: linear-gradient(90deg, #fa1db2, #ff6ec7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`;

export const AcceptBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid #fa1db2;
  background: rgba(250, 29, 178, 0.1);
  color: #fa1db2;
  font-weight: 600;
  font-family: "Barlow Semi Condensed", sans-serif;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #fa1db2;
    color: black;
    box-shadow: 0 0 1.2rem rgba(250, 29, 178, 0.6);
    transform: translateY(-2px);
  }
`;

export const RejectBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid #fa1db2;
  background: rgba(250, 29, 178, 0.1);
  color: #fa1db2;
  font-weight: 600;
  font-family: "Barlow Semi Condensed", sans-serif;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #fa1db2;
    color: black;
    box-shadow: 0 0 1.2rem rgba(250, 29, 178, 0.6);
    transform: translateY(-2px);
  }
`;

export const responsiveContent = css`
  @media (max-width: 480px) {
    padding: 32px 24px;
    ${Buttons} {
      flex-direction: column;
    }
    ${Title} {
      font-size: 1.5rem;
    }
  }
`;

