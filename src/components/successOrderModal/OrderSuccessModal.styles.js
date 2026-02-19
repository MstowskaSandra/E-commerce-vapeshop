import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.85),
    rgba(0, 0, 0, 0.95)
  );
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease forwards;
  pointer-events: all;
`;

export const ModalCard = styled.div`
  background: linear-gradient(145deg, #111, #1a1a1a);
  width: 100%;
  max-width: 40rem;
  max-height: 90vh;
  color: #f5f5f5;
  border-radius: 1.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow:
    0 0 2rem rgba(250, 29, 178, 0.25),
    0 2rem 4rem rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(250, 29, 178, 0.2);
  font-family: "Barlow Semi Condensed", sans-serif;
  flex: 0 1 auto;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(250, 29, 178, 0.3) transparent;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(250, 29, 178, 0.3);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(250, 29, 178, 0.5);
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.4;
  background: linear-gradient(90deg, #fa1db2, #ff6ec7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const InfoText = styled.p`
  text-align: center;
  line-height: 1.6;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

export const CloseBtn = styled.button`
  align-self: center;
  padding: 0.8rem 2rem;
  border-radius: 1rem;
  background: rgba(250, 29, 178, 0.1);
  border: 1px solid #fa1db2;
  color: #fa1db2;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.25s ease;

  &:hover {
    background: #fa1db2;
    color: black;
    box-shadow: 0 0 1.2rem rgba(250, 29, 178, 0.6);
    transform: translateY(-2px);
  }
`;
